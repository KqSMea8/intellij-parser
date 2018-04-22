import {Diagnostic, Actions} from './defination';
import * as utils from './utils';
import * as service from '../service';

let initialized = false;

export function initialize(cb) {
  if(initialized) {
    return;
  }
  initialized = true;
  cb();
}

export default class SQLWorker {
  private _config: Diagnostic;
  private _worker;
  private _validationResolver;

  constructor(config: Diagnostic) {
    this._config = config;
    this._worker = new Worker('./common.worker.js');
    this._validationResolver = null;
    this._worker.onmessage = (actionType: Actions, data) => {
      this[`_${actionType}Resolver`](data);
    }
  }

  depose() {
    this._worker.terminate();
  }

  doHover(doc: string, pos: number): Promise<any> {
    this._worker.postMessage(Actions.hover, doc, pos);
    return new Promise((resolve) => {

    })
  }

  doValidation = (doc: string) => {
    this._worker.postMessage(Actions.validation, doc);
    return new Promise(resolve => {
      this._validationResolver = resolve;
    })
  }

  doComplete(doc: string, pos: number) {
    this._worker.postMessage(Actions.complete, doc, pos);
    return new Promise((resolve) => {

    })

  }
}