// import {Diagnostic, Actions} from './Const';
import * as utils from './utils';
import * as _ from 'lodash';
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
  /** 不同操作的Promise resolve */
  private validationResolver;
  private hoverResolver;
  private completeResolver;
  /** 不同操作的Promise reject队列 */
  private validationRejects;
  private hoverRejects;
  private completeRejects;

  constructor(config: Diagnostic) {
    this.config = config;
    this.worker = new Worker;

    this.worker.onmessage = (e: MessageEvent) => {
      const {data: {actionType, result}} = e;
      this[`${actionType}Resolver`](result);
      /** 防止内存泄漏 */
      this[`${actionType}Rejects`].forEach(reject => reject());
      this[`${actionType}Rejects`] = [];
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
    return new Promise((resolve, reject) => {
      this.hoverResolver = resolve;
      this.hoverRejects.push(reject);
    })
  }

  doValidation = (doc: string): Promise<any> => {
    this.worker.postMessage({
      actionType: Actions.validation, 
      doc, 
    });
    return new Promise((resolve, reject) => {
      this.validationResolver = resolve;
      this.validationRejects.push(reject);
    })
  }

  doComplete = (doc: string, pos: number): Promise<any> => {
    this.worker.postMessage({
      actionType: Actions.complete, 
      doc, 
      pos
    });
    return new Promise((resolve, reject) => {
      this.completeResolver = resolve;
      this.completeRejects.push(reject);
    })
  }
}