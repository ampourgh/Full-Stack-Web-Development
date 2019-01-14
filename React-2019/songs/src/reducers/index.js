import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Blue (Da Be Dee)', duration: '3:39' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'Barbie Girl', duration: '3:21' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
