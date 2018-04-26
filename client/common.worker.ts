import {Actions} from './Const.ts';
import * as service from '../service/index.ts';
import {absorbing} from '../src/utils.ts';

let hoverCount = 0;
let validationCount = 0;
let completeCount = 0;

onmessage = (e) => {
	const {data: {actionType, doc, pos}} = e;
	switch(actionType) {
		case Actions.hover: {
			const result = absorbing(++hoverCount, () => service.doHover(doc, pos));

			if(result.count === hoverCount) {
				postMessage({
					actionType: Actions.hover, 
					result: result.data
				})
			}
			return;
		}

		case Actions.validation: {
			const result = absorbing(++validationCount, () => service.doValidation(doc));
			
			if(result.count === validationCount) {
				postMessage({
					actionType: Actions.validation, 
					result: result.data
				})
			}
			return;
		}

		case Actions.complete: {
			const result = absorbing(++completeCount, () => service.doComplete(doc, pos));
			
			if(result.count === completeCount) {
				postMessage({
					actionType: Actions.complete, 
					result: result.data
				})
			}
			return;
		}
	}
};