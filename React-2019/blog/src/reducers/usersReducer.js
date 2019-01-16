export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // [state array, additional action.payload in array] - new array
      return [...state, action.payload];
    default:
      return state;
  }
};
