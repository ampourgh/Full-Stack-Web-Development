import _ from 'lodash';
import axiosApiJsonPlaceholder from '../apis/jsonPlaceholder';


// dispatch is for getting unlimited power to make changes to the data on the redux side of the app - CHANGE
// can get called on a redux store, to return all the state/data inside the redux store - ACCESS
// The async function return was refactored, with the curly braces and return
export const fetchPostsAndUsers = () => async (dispatch, getState) => {

  console.log('Dispatching fetchPosts()...');

  // waits for fetchPosts function before going forward
  await dispatch(fetchPosts());

  console.log('Dispatched fetchPosts()!');

  // _.chain -- special function in lodash that allows us to chain on
  // params of one is passed to the next
  _.chain(getState().reducerPosts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();

    /*

      Original code for above:

      const userIds = _.uniq(_.map(getState().posts, 'userId'));
      userIds.forEach(id => dispatch(fetchUser(id)));

    */
};

// async call with the async and await syntax
// can't export without the dispatch syntax
// action creator is not a plain javascript function with the async -- translate to babel to see what's going on underneath the hood
export const fetchPosts = () => async dispatch => {
  const response = await axiosApiJsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await axiosApiJsonPlaceholder.get(`/users/${id}`);

  // singular USER because we're fetching a single user at a time
  dispatch({ type: 'FETCH_USER', payload: response.data });

  console.log('Dispatched type and payload.');

};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
