import './VideoItem.css';
import React from 'react';

// passed from the VideoList component
const VideoItem = ({ video, onVideoSelect,x }) => {

  console.log("Video " + x + ": " + video.snippet.title);

  return (
    /* basic JSON wrapped around JSX and CSS (./VideoItem.css)*/
    /* () => onVideoSelect(video) is a callback function that sends the video back to App.js */
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
