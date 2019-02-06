/*
NOTE: Description of how the code works (when it isn't self evident).
XXX: Warning about possible pitfalls, can be used as NOTE:XXX:.
HACK: Not very well written or malformed code to circumvent a problem/bug. Should be used as HACK:FIXME:.
FIXME: This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting).
BUG: There is a problem here.
TODO: No problem, but addtional code needs to be written, usually when you are skipping something.

---

NOTE - FOLDER DESIGN

node_modules
public
  - index.html
src
  > actions
    - index.js
  > apis
    - jsonPlaceholder.js
  > components
    - App.js
    - PostList.js
    - UserHeader.js
  > reducers
    - index.js
    - postsReducer.js
    - usersReducer.js
  - index.js

*/


// NOTE - src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);


// NOTE - src/components/App.js

import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;


// NOTE - src/components/PostList.js

import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {

    let counter = 0;
    const notFinite = 999;

    return this.props.classPosts.map(post => {

      if (counter < notFinite) {
        counter += 1;
        return (
          <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
          <div className="description">
          <h2>{counter}.) {post.title}</h2>
          <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
          </div>
          </div>
        );
      }

    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { classPosts: state.reducerPosts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);


// NOTE - src/components/userHeader.js

import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { classUser } = this.props;

    if (!classUser) {
      return null;
    }

    return <div className="header">{classUser.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {

  console.log('STATE PROPS: ');
  console.log(state.reducerUsers);
  console.log('OWN PROPS: ');
  console.log(ownProps);

  return { classUser: state.reducerUsers.find(user => user.id === ownProps.userId) }; // TODO: figure out the parenthesis
};

export default connect(mapStateToProps)(UserHeader);


// NOTE - src/reducers/index.js

import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  reducerPosts: postsReducer,
  reducerUsers: usersReducer
});


// NOTE - src/reducers/postsReducer.js

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};


// NOTE - src/reducers/usersReducer.js

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};


// NOTE - src/actions/index.js

import _ from 'lodash';
import axioApiJsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {

  console.log('Dispatching fetchPosts()...');

  await dispatch(fetchPosts());

  console.log('Dispatched fetchPosts()!');

  _.chain(getState().reducerPosts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();

};

export const fetchPosts = () => async dispatch => {
  const response = await axioApiJsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await axioApiJsonPlaceholder.get(`/users/${id}`);

  // singular USER because we're fetching a single user at a time
  dispatch({ type: 'FETCH_USER', payload: response.data });

  console.log('Dispatched type and payload.');

};


// NOTE - src/apis/jsonPlaceholder.js

import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
