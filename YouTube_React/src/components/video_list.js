import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  // .map() is a loop
  const videoItems = props.videos.map((video) => {
    
    // etag is YouTube's key identifier
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4-group list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
