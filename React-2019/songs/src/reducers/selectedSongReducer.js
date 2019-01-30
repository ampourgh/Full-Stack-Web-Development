// the commented out sections are the parts that were edited out pre-import

export default (selectedSong = null, action) => {
// const selectedSongReducer = (selectedSong = null, action) => {

  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }

  /*
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
  */
};
