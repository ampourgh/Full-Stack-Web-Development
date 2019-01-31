import { combineReducers } from 'redux';
import selectedSongReducer from './selectedSongReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  reducerStateSongsList: songsReducer,
  reducerStateSelectedSong: selectedSongReducer
});
