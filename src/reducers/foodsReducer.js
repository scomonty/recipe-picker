export default (state = [], action) => {
	// must return any vaule besides 'undefined' or will throw error
if (action.type === 'FETCH_FOODS') {
	return action.payload;
}
return state;

//switch statement
//switch(action.type) {
	//case 'FETCH_POSTS':
	//return action.payload;
	//case 'lorem_ipsum':
	//return action.payload;
	//default:
	//return state;
//}
}
