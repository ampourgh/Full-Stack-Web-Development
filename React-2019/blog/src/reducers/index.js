import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// When calling on the child reducers, they should always have a return
// a return of undefined is not allowed, will give an error
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

// A rule on reducers, it's sole purpose is to:
// - look at the parameter value
// - look at the conditionals in itself (for example whether it fits the string value)
// - RETURN a response based on that; some computation based on the arg(s)


// if you change the pre-existing state, and it's equal to the state that's being returned
// the reducer function will read it as nothing being changed, so no changes will be made
