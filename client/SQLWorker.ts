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
  private config: Diagnostic;
  private worker: Worker;
  private validationResolver;
  private hoverResolver;
  private completeResolver;

  constructor(config: Diagnostic) {
    this.config = config;
    this.worker = new Worker;

    this.worker.onmessage = (e: MessageEvent) => {
      const {data: {actionType, result}} = e;
      this[`${actionType}Resolver`](result);
    }
  }

  depose() {
    this.worker.terminate();
  }

  doHover(doc: string, pos: number): Promise<any> {
    this.worker.postMessage({
      actionType: Actions.hover, 
      doc, 
      pos
    });
    return new Promise((resolve) => {
      this.hoverResolver = resolve;
    })
  }

  doValidation = (doc: string): Promise<any> => {
    this.worker.postMessage({
      actionType: Actions.validation, 
      doc, 
    });
    return new Promise(resolve => {
      this.validationResolver = resolve;
    })
  }

  doComplete = (doc: string, pos: number): Promise<any> => {
    this.worker.postMessage({
      actionType: Actions.complete, 
      doc, 
      pos
    });
    return new Promise((resolve) => {
      this.completeResolver = resolve;
    })
  }
}