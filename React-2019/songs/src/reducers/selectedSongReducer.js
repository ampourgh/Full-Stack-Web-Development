// the commented out sections are the parts that were edited out pre-import

export default (actionSelectedSong = null, action) => {
// const selectedSongReducer = (actionSelectedSong = null, action) => {

  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return actionSelectedSong;
  }

  /*
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
  */
};
