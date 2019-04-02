import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

// <video class="video-container video-container-overlay" autoplay="" loop="" muted="" data-reactid=".0.1.0.0">
//   <source src="{classPropsChosenSong.video}" type="video/mp4"/>
// </video>

const SongDetail = ({ classPropsChosenSong }) => {
  if (!classPropsChosenSong) {
    return <div>Select a classPropsChosenSong</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {classPropsChosenSong.title}
        <br />
        Duration: {classPropsChosenSong.duration}
        <br />
        <img src ={classPropsChosenSong.img} />
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { classPropsChosenSong: state.reducerStateSelectedSong };
};

export default connect(mapStateToProps)(SongDetail);
