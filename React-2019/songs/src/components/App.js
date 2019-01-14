import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          {/* imported content from SongList.js */}
          <SongList />
        </div>
        <div className="column eight wide">
        {/* imported content from SongDetail.js */}
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
