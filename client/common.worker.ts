import {Actions} from './defination';
import * as service from '../service';
import * as utils from './utils';

let hoverIdx = 0;
let completeIdx = 0;
let validationIdx = 0;

onmessage = (actionType, doc, pos) => {

	switch(actionType) {
		case Actions.hover: {
			// service.doHover
			// utils.safePost()
		}

		case Actions.validation: {
			const result = utils.safePost(service.doValidation(doc), ++validationIdx);
			if(result.idx === validationIdx) {
				postMessage(Actions.validation, result.data)
			}
		}

		case Actions.complete: {
			
		}
	}

};