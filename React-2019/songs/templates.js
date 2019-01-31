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

export const actionSelectSong = classSongListClickedIndividualSong => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: classSongListClickedIndividualSong
  };
};

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/components/App.js

import React from 'react';
import ClassSongList from './SongList';
import ClassSongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ClassSongList />
        </div>
        <div className="column eight wide">
          <ClassSongDetail />
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

const ClassSongDetail = ({ classPropsChosenSong }) => {

  console.log(classPropsChosenSong);
  if (!classPropsChosenSong) {
    return <div>Select a classPropsChosenSong</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        <b>Title:</b> {classPropsChosenSong.title}
        <br />
        <b>Description:</b> {classPropsChosenSong.artist}
        <br />
        <b>Duration:</b> {classPropsChosenSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { classPropsChosenSong: state.reducerStateSelectedSong };
};

export default connect(mapStateToProps)(ClassSongDetail);

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/components/SongList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionSelectSong } from '../actions';

class ClassSongList extends Component {
  renderList() {

    return this.props.songsListClassPropsSongs.map(individualSong => {
      console.log('track: ' + individualSong.title);
      return (
        <div className="item" key={individualSong.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.actionSelectSong(individualSong)}
            >
              <div className="content">{individualSong.title}</div>
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

const mapStateToProps = state => {

  return { songsListClassPropsSongs: state.reducerStateSongsList };

};

// @XXX export default connect( PROP-MAPPER(), { ACTION } )( CLASS );
export default connect(
  mapStateToProps,
  { actionSelectSong }
)(ClassSongList);

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/index.js

import { combineReducers } from 'redux';
import selectedSongReducer from './selectedSongReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  reducerStateSongsList: songsReducer,
  reducerStateSelectedSong: selectedSongReducer
});


// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/selectedSongReducer.js

export default (actionSelectedSong = null, action) => {

  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return actionSelectedSong;
  }

};

// XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
// NOTE - src/reducers/songsReducers.js

export default () => {
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
