/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as mode from './sqlMode';

import Emitter = monaco.Emitter;
import IEvent = monaco.IEvent;
import IDisposable = monaco.IDisposable;

export class LanguageServiceDefaultsImpl implements monaco.languages.sql.LanguageServiceDefaults {
  private _onDidChange = new Emitter<monaco.languages.sql.LanguageServiceDefaults>();
  private _diagnosticsOptions: monaco.languages.sql.DiagnosticsOptions;
  private _languageId: string;

  constructor(languageId: string, diagnosticsOptions: monaco.languages.sql.DiagnosticsOptions) {
    this._languageId = languageId;
    this.setDiagnosticsOptions(diagnosticsOptions);
  }

  get onDidChange(): IEvent<monaco.languages.sql.LanguageServiceDefaults> {
    return this._onDidChange.event;
  }

  get languageId(): string {
    return this._languageId;
  }

  get diagnosticsOptions(): monaco.languages.sql.DiagnosticsOptions {
    return this._diagnosticsOptions;
  }

  setDiagnosticsOptions(options: monaco.languages.sql.DiagnosticsOptions): void {
    this._diagnosticsOptions = options || Object.create(null);
    this._onDidChange.fire(this);
  }
}

const diagnosticDefault: monaco.languages.sql.DiagnosticsOptions = {
  validate: true,
  allowComments: true,
  schemas: []
};

const sqlDefaults = new LanguageServiceDefaultsImpl('sql', diagnosticDefault);

// Export API
function createAPI(): typeof monaco.languages.sql {
  return {
    sqlDefaults: sqlDefaults
  };
}
monaco.languages.sql = createAPI();

// --- Registration to monaco editor ---

function getMode(): monaco.Promise<typeof mode> {
  return monaco.Promise.wrap(import('./sqlMode'));
}

monaco.languages.register({
  id: 'sql',
  extensions: ['.sql'],
  aliases: ['SQL', 'sql']
});
monaco.languages.onLanguage('sql', () => {
  getMode().then(mode => mode.setupMode(sqlDefaults));
});
