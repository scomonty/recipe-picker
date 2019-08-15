export default (state = [ "54504" ], action) => {
	if (action.type === 'FETCH_RID') {
	return [...state, action.payload];
}
return state;
}