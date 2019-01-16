export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // [state array, additional action.payload in array] - new array
      return [...state, action.payload];

      /*
        when send data, want to create a new array, or variable

        not something like so:
        state = [x, y]
        state.push(z)

        state
        >>> [x, y, z] <-- this is considered a mutation
      */
    default:
      return state;
  }
};
