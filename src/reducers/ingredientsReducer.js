export default (state = [], action) => {
	if (action.type === 'FETCH_INGREDIENTS') {
	return [...state, action.payload];
}
return state;
}
