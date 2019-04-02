export default (actionSelectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return actionSelectedSong;
  }
};

// const selectedSongReducer = (selectedSong = null, action) => {
//
//   if (action.type === 'SONG_SELECTED') {
//     return action.payload;
//   }
//
//   return selectedSong;
// };
