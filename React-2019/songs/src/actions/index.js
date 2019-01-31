// Common design practice to call actions js file as index.js
// Reduces the import name
// import actions from './actions';

// Action creator
export const actionSelectSong = classSongListClickedIndividualSong => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: classSongListClickedIndividualSong
  };
};

// typically export default selectSong
// but if there's multiple imports, you'll want to give it a named export
// That's why the export is in front of the function declaration instead
