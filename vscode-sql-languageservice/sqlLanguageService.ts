/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {
  TextDocument,
  Position,
  CompletionList,
  Hover,
  Range,
  SymbolInformation,
  Diagnostic,
  Location,
  DocumentHighlight,
  CodeActionContext,
  Command,
  WorkspaceEdit,
  TextEdit
} from 'vscode-languageserver-types';

import { Parser } from '../sql-parser/parser.g';
import { SQLCompletion } from './services/sqlCompletion';
import { SQLHover } from './services/sqlHover';
import { SQLNavigation } from './services/sqlNavigation';
import { SQLCodeActions } from './services/sqlCodeActions';
import { SQLValidation } from './services/sqlValidation';
import { FoldingRangeList } from './protocol/foldingProvider.proposed';

export type Stylesheet = {};
export { TextEdit, Range };

export interface Color {
  red: number;
  blue: number;
  green: number;
  alpha: number;
}

export interface ColorInformation {
  range: Range;
  color: Color;
}

export interface ColorPresentation {
  /**
   * The label of this color presentation. It will be shown on the color
   * picker header. By default this is also the text that is inserted when selecting
   * this color presentation.
   */
  label: string;
  /**
   * An [edit](#TextEdit) which is applied to a document when selecting
   * this presentation for the color.  When `falsy` the [label](#ColorPresentation.label)
   * is used.
   */
  textEdit?: TextEdit;
  /**
   * An optional array of additional [text edits](#TextEdit) that are applied when
   * selecting this color presentation. Edits must not overlap with the main [edit](#ColorPresentation.textEdit) nor with themselves.
   */
  additionalTextEdits?: TextEdit[];
}

export interface PropertyCompletionContext {
  propertyName: string;
  range: Range;
}

export interface PropertyValueCompletionContext {
  propertyName: string;
  propertyValue?: string;
  range: Range;
}

export interface URILiteralCompletionContext {
  uriValue: string;
  position: Position;
  range: Range;
}

export interface ICompletionParticipant {
  onProperty?: (context: PropertyCompletionContext) => void;
  onPropertyValue?: (context: PropertyValueCompletionContext) => void;
  onURILiteralValue?: (context: URILiteralCompletionContext) => void;
}

export interface LanguageService {
  configure(raw: LanguageSettings): void;
  doValidation(document: TextDocument, stylesheet: Stylesheet, documentSettings?: LanguageSettings): Diagnostic[];
  parseSQLDocument(document: TextDocument): Stylesheet;
  doComplete(document: TextDocument, position: Position, stylesheet: Stylesheet): CompletionList | null;
  setCompletionParticipants(registeredCompletionParticipants: ICompletionParticipant[]): void;
  doHover(document: TextDocument, position: Position, stylesheet: Stylesheet): Hover | null;
  findDefinition(document: TextDocument, position: Position, stylesheet: Stylesheet): Location | null;
  findReferences(document: TextDocument, position: Position, stylesheet: Stylesheet): Location[];
  findDocumentHighlights(document: TextDocument, position: Position, stylesheet: Stylesheet): DocumentHighlight[];
  findDocumentSymbols(document: TextDocument, stylesheet: Stylesheet): SymbolInformation[];
  doCodeActions(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: Stylesheet): Command[];
  /** deprecated, use findDocumentColors instead */
  findColorSymbols(document: TextDocument, stylesheet: Stylesheet): Range[];
  findDocumentColors(document: TextDocument, stylesheet: Stylesheet): ColorInformation[];
  getColorPresentations(
    document: TextDocument,
    stylesheet: Stylesheet,
    color: Color,
    range: Range
  ): ColorPresentation[];
  doRename(document: TextDocument, position: Position, newName: string, stylesheet: Stylesheet): WorkspaceEdit;
  findFoldingRegions(document: TextDocument, stylesheet: Stylesheet): FoldingRangeList;
}

export type LintSettings = { [key: string]: string };

export interface LanguageSettings {
  validate?: boolean;
  lint?: LintSettings;
}

function createFacade(
  parser: Parser,
  completion: SQLCompletion,
  hover: SQLHover,
  navigation: SQLNavigation,
  codeActions: SQLCodeActions,
  validation: SQLValidation
) {
  return {
    configure: validation.configure.bind(validation),
    doValidation: validation.doValidation.bind(validation),
    parseSQLDocument: parser.parseStylesheet.bind(parser),
    doComplete: completion.doComplete.bind(completion),
    setCompletionParticipants: completion.setCompletionParticipants.bind(completion),
    doHover: hover.doHover.bind(hover),
    findDefinition: navigation.findDefinition.bind(navigation),
    findReferences: navigation.findReferences.bind(navigation),
    findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
    findDocumentSymbols: navigation.findDocumentSymbols.bind(navigation),
    doCodeActions: codeActions.doCodeActions.bind(codeActions),
    findColorSymbols: (d, s) => navigation.findDocumentColors(d, s).map(s => s.range),
    findDocumentColors: navigation.findDocumentColors.bind(navigation),
    getColorPresentations: navigation.getColorPresentations.bind(navigation),
    doRename: navigation.doRename.bind(navigation),
    findFoldingRegions: navigation.findFoldingRegions.bind(navigation)
  };
}

export function getSQLLanguageService(): LanguageService {
  return createFacade(
    new Parser([]),
    new SQLCompletion(),
    new SQLHover(),
    new SQLNavigation(),
    new SQLCodeActions(),
    new SQLValidation()
  );
}
