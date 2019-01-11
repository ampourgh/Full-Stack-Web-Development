import React from 'react';
import VideoItem from './VideoItem';

// passed from the App component
const VideoList = ({ videos, onVideoSelect, x }) => {

  const renderedList = videos.map(video => {
    x++;
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        x={x}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
