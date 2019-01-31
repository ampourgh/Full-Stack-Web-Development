/*
NOTE: Description of how the code works (when it isn't self evident).
XXX: Warning about possible pitfalls, can be used as NOTE:XXX:.
HACK: Not very well written or malformed code to circumvent a problem/bug. Should be used as HACK:FIXME:.
FIXME: This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting).
BUG: There is a problem here.
TODO: No problem, but addtional code needs to be written, usually when you are skipping something.

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX

NOTE - FOLDER DESIGN

node_modules
public
  - index.html
src
  > actions
    - index.js
  > components
    - App.js
    - SongDetail.js
    - SongList.js
  > reducers
    - index.js
    - selectedSongReducer.js
    - songsReducers.js
  - index.js

NOTE - IN TERMINAL
  create-react-app songs
  npm install --save redux react-redux

*/

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/index.js

// putting a bit of boilerplate
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/actions/index.js

// Action creator
export const actionSelectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/components/App.js

import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          {/* imported content from SongList.js */}
          <SongList />
        </div>
        <div className="column eight wide">
        {/* imported content from SongDetail.js */}
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/components/SongDetail.js

import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

  console.log(song);
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        <b>Title:</b> {song.title}
        <br />
        <b>Description:</b> {song.artist}
        <br />
        <b>Duration:</b> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.reducerSongSelected };
};

export default connect(mapStateToProps)(SongDetail);

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/components/SongList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Need curly braces because of how the functon is individually exported
import { actionSelectSong } from '../actions';

class SongList extends Component {
  renderList() {

    {/* Takes each JSX song and maps it out into JSX */}

    return this.props.reducerSongsList.map(song => {
      console.log('track: ' + song.title);
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.actionSelectSong(song)}
            >
              <div className="content">{song.title}</div>
            </button>
          </div>
        </div>
      );
    });

  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Going to get the data in Redux store, and do some calculations
// Usually a design practice to call it mapStateToProps (or something fairly similar)
const mapStateToProps = state => {
  // line 1 of console
  console.log(state.reducerSongsList);

  // returning an object of the state's songs
  return { reducerSongsList: state.reducerSongsList };
};

// This piece of syntax comes from react-redux's connect import
// mapStateToProps takes Redux information and sends it off to SongList

// @XXX export default connect( PROP-MAPPER(), { ACTION } )( CLASS );
export default connect(
  mapStateToProps,
  { actionSelectSong }
)(SongList);

/*
The above syntax is the equivalent of the following JavaScript function

function connect() {
  return function() {
    return "Greetings & Salutation!";
  }
}

The second parenthesis is for the return function
connect()();
*/

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/index.js

import { combineReducers } from 'redux';
import selectedSongReducer from './selectedSongReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  reducerSongsList: songsReducer,
  reducerSongSelected: selectedSongReducer
});

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/selectedSongReducer.js
// the commented out sections are the parts that were edited out pre-import

export default (reducerSongSelected = null, action) => {
// const selectedSongReducer = (reducerSongSelected = null, action) => {

  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return reducerSongSelected;
  }

  /*
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return reducerSongSelected;
  */
};

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/songsReducers.js

export default () => {
// const songsReducer = () => {
  return [
    { title: 'Musical Track 1', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 2', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 3', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 4', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 5', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 6', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 7', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 8', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 9', artist: 'author goes here', duration: 'insert here' },
    { title: 'Musical Track 10', artist: 'author goes here', duration: 'insert here' }
  ];
};
