import {testJson} from '../ast';
import {walker} from '../src/utils.ts';

export function doValidation(doc: string) {
  /** ast提供 */
  console.log('doValidation');
}

export function doComplete(doc: string, pos: number) {
  /** ast提供 */
  console.log('doComplete');
}
    
export function doHover(doc: string, pos: number) {
  /** 输入doc，生成parser */
  return walker(testJson, pos);
}

