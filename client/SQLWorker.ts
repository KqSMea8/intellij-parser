// import {Diagnostic, Actions} from './Const';
import * as utils from './utils';
import * as service from '../service';
import Worker = require("worker-loader?name=common.worker.js!./common.worker.ts");
let initialized = false;

export enum Actions {
  hover='hover',
  validation='validation',
  complete='complete'
}

type Tseverity = 'error' | 'waring' | 'ignore';

export interface Diagnostic {
  severity: Tseverity;
}

export default class SQLWorker {
  private _config: Diagnostic;
  private _worker: Worker;
  private _validationResolver;
  private _hoverResolver;
  private _completeResolver;

  constructor(config: Diagnostic) {
    this._config = config;
    this._worker = new Worker;

    this._validationResolver = null;
    this._hoverResolver = null;
    this._completeResolver = null;

    this._worker.onmessage = e => {
      const {data: {actionType, result}} = e;
      this[`_${actionType}Resolver`](result);
    }
  }

  depose() {
    this._worker.terminate();
  }

  doHover(doc: string, pos: number): Promise<any> {
    this._worker.postMessage({
      actionType: Actions.hover, 
      doc, 
      pos
    });
    return new Promise((resolve) => {
      this._hoverResolver = resolve;
    })
  }

  doValidation = (doc: string): Promise<any> => {
    this._worker.postMessage({
      actionType: Actions.validation, 
      doc, 
    });
    return new Promise(resolve => {
      this._validationResolver = resolve;
    })
  }

  doComplete = (doc: string, pos: number): Promise<any> => {
    this._worker.postMessage({
      actionType: Actions.complete, 
      doc, 
      pos
    });
    return new Promise((resolve) => {
      this._completeResolver = resolve;
    })
  }
}