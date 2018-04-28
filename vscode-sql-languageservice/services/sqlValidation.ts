/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nodes from '../parser/sqlNodes';
import { TextDocument, Range, Diagnostic, DiagnosticSeverity } from 'vscode-languageserver-types';
import { LintConfigurationSettings } from './lintRules';
import { LintVisitor } from './lint';
import { LanguageSettings } from '../sqlLanguageService';

export class SQLValidation {
  private settings: LanguageSettings;

  constructor() {}

  public configure(settings: LanguageSettings) {
    this.settings = settings;
  }

  public doValidation(
    document: TextDocument,
    stylesheet: nodes.Stylesheet,
    settings: LanguageSettings = this.settings
  ): Diagnostic[] {
    if (settings && settings.validate === false) {
      return [];
    }

    let entries: nodes.IMarker[] = [];
    entries.push.apply(entries, nodes.ParseErrorCollector.entries(stylesheet));
    entries.push.apply(
      entries,
      LintVisitor.entries(stylesheet, document, new LintConfigurationSettings(settings && settings.lint))
    );

    function toDiagnostic(marker: nodes.IMarker): Diagnostic {
      let range = Range.create(
        document.positionAt(marker.getOffset()),
        document.positionAt(marker.getOffset() + marker.getLength())
      );
      return <Diagnostic>{
        code: marker.getRule().id,
        source: document.languageId,
        message: marker.getMessage(),
        severity: marker.getLevel() === nodes.Level.Warning ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error,
        range: range
      };
    }

    return entries.filter(entry => entry.getLevel() !== nodes.Level.Ignore).map(toDiagnostic);
  }
}
