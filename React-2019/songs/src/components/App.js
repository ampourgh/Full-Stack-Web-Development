import React from 'react';
import ClassSongList from './SongList';
import ClassSongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          {/* imported content from SongList.js */}
          <ClassSongList />
        </div>
        <div className="column eight wide">
        {/* imported content from SongDetail.js */}
          <ClassSongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
