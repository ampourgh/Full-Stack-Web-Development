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
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
