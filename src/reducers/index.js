import {
	combineReducers
} from 'redux';
import foodsReducer from './foodsReducer';
import ingredientsReducer from './ingredientsReducer';
import rIdReducer from './rIdReducer';


export default combineReducers({
	foods: foodsReducer,
	ingredients: ingredientsReducer,
	rId: rIdReducer
})

/*
export default combineReducers({
	//dummy reducer to trick redux and remove error when first starting to build project
	dummy: () => 0
});
*/