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

// applyMiddleware is called on for redux-thunk; how we apply middleware to a redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// createStore(reducers) -> given a second variable
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
  {/* usage of the semantic UI stylesheet */}
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;


// NOTE - src/components/PostList.js
