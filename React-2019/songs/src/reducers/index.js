import { combineReducers } from 'redux';
import selectedSongReducer from './selectedSongReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
