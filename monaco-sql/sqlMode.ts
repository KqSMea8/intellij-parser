/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { WorkerManager } from './workerManager';
import { SQLWorker } from './sqlWorker';
import { LanguageServiceDefaultsImpl } from './monaco.contribution';
import * as languageFeatures from './languageFeatures';

import Promise = monaco.Promise;
import Uri = monaco.Uri;
import IDisposable = monaco.IDisposable;

export function setupMode(defaults: LanguageServiceDefaultsImpl): void {
  let disposables: IDisposable[] = [];

  const client = new WorkerManager(defaults);
  disposables.push(client);

  const worker: languageFeatures.WorkerAccessor = (...uris: Uri[]): Promise<SQLWorker> => {
    return client.getLanguageServiceWorker(...uris);
  };

  let languageId = defaults.languageId;

  let diagnostcsAdapter = new languageFeatures.DiagnostcsAdapter(languageId, worker);
  defaults.onDidChange(c => diagnostcsAdapter.clearMarkers());

  disposables.push(
    monaco.languages.registerCompletionItemProvider(languageId, new languageFeatures.CompletionAdapter(worker))
  );
  disposables.push(monaco.languages.registerHoverProvider(languageId, new languageFeatures.HoverAdapter(worker)));
  disposables.push(
    monaco.languages.registerDocumentSymbolProvider(languageId, new languageFeatures.DocumentSymbolAdapter(worker))
  );
  // disposables.push(
  //   monaco.languages.registerDocumentFormattingEditProvider(
  //     languageId,
  //     new languageFeatures.DocumentFormattingEditProvider(worker)
  //   )
  // );
  // disposables.push(
  //   monaco.languages.registerDocumentRangeFormattingEditProvider(
  //     languageId,
  //     new languageFeatures.DocumentRangeFormattingEditProvider(worker)
  //   )
  // );
  disposables.push(diagnostcsAdapter);
  disposables.push(monaco.languages.setLanguageConfiguration(languageId, richEditConfiguration));
}

const richEditConfiguration: monaco.languages.LanguageConfiguration = {
  wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,

  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/']
  },

  brackets: [['{', '}'], ['[', ']']],

  autoClosingPairs: [
    { open: '{', close: '}', notIn: ['string'] },
    { open: '[', close: ']', notIn: ['string'] },
    { open: '"', close: '"', notIn: ['string'] }
  ]
};
