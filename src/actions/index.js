import _ from 'lodash';
import Call from '../apis/Call';
import Get from '../apis/Get';


const fetchFoods = (term) =>
	// the redux thunk
	async dispatch => {
		const response = await Call.get('', {
			params: {
				q: term
			}
		});
		dispatch({
			type: 'FETCH_FOODS',
			payload: response.data
		})
	};

// use memoize from lodash to make the api call only once
export const _fetchFoods = _.memoize(fetchFoods);

const fetchIngredients = (buttonId) =>
	async dispatch => {
		const response = await Get.get('', {
			params: {
				rId: buttonId
			}
		});
		dispatch({
			type: 'FETCH_INGREDIENTS',
			payload: response.data
		})
	}

export const _fetchIngredients = _.memoize(fetchIngredients);



export const getRId = (buttonId) =>
	dispatch => {
		const response = buttonId
		dispatch({
			type: 'FETCH_RID',
			payload: response
		})
	}