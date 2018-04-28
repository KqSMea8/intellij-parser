/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import Promise = monaco.Promise;
import Thenable = monaco.Thenable;
import IWorkerContext = monaco.worker.IWorkerContext;

import * as sqlService from '../vscode-sql-languageservice/sqlLanguageService';
import * as ls from 'vscode-languageserver-types';

export class SQLWorker {
  private _ctx: IWorkerContext;
  private _languageService: sqlService.LanguageService;
  private _languageSettings: sqlService.LanguageSettings;
  private _languageId: string;

  constructor(ctx: IWorkerContext, createData: ICreateData) {
    this._ctx = ctx;
    this._languageSettings = createData.languageSettings;
    this._languageId = createData.languageId;
    this._languageService = sqlService.getSQLLanguageService();
    this._languageService.configure(this._languageSettings);
  }

  doValidation(uri: string): Thenable<ls.Diagnostic[]> {
    let document = this._getTextDocument(uri);
    if (document) {
      let sqlDocument = this._languageService.parseSQLDocument(document);
      return this._languageService.doValidation(document, sqlDocument);
    }
    return Promise.as([]);
  }
  doComplete(uri: string, position: ls.Position): Thenable<ls.CompletionList> {
    let document = this._getTextDocument(uri);
    let sqlDocument = this._languageService.parseSQLDocument(document);
    return this._languageService.doComplete(document, position, sqlDocument);
  }
  doResolve(item: ls.CompletionItem): Thenable<ls.CompletionItem> {
    return this._languageService.doResolve(item);
  }
  doHover(uri: string, position: ls.Position): Thenable<ls.Hover> {
    let document = this._getTextDocument(uri);
    let sqlDocument = this._languageService.parseSQLDocument(document);
    return this._languageService.doHover(document, position, sqlDocument);
  }
  format(uri: string, range: ls.Range, options: ls.FormattingOptions): Thenable<ls.TextEdit[]> {
    let document = this._getTextDocument(uri);
    let textEdits = this._languageService.format(document, range, options);
    return Promise.as(textEdits);
  }
  resetSchema(uri: string): Thenable<boolean> {
    return Promise.as(this._languageService.resetSchema(uri));
  }
  findDocumentSymbols(uri: string): Thenable<ls.SymbolInformation[]> {
    let document = this._getTextDocument(uri);
    let sqlDocument = this._languageService.parseSQLDocument(document);
    let symbols = this._languageService.findDocumentSymbols(document, sqlDocument);
    return Promise.as(symbols);
  }
  private _getTextDocument(uri: string): ls.TextDocument {
    let models = this._ctx.getMirrorModels();
    for (let model of models) {
      if (model.uri.toString() === uri) {
        return ls.TextDocument.create(uri, this._languageId, model.version, model.getValue());
      }
    }
    return null;
  }
}

export interface ICreateData {
  languageId: string;
  languageSettings: sqlService.LanguageSettings;
}

export function create(ctx: IWorkerContext, createData: ICreateData): SQLWorker {
  return new SQLWorker(ctx, createData);
}
