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
