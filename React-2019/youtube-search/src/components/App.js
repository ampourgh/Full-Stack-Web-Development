import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, x: 0 };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  // The syntax 'async' & 'await' are inserted to make the function asynchronous
  onTermSubmit = async term => {

    // shows the search term
    console.log('search term: gaming ' + term);

    const response = await youtube.get('/search', {
      params: {
        // can add a prefix or suffix here
        q: 'gaming ' + term
      }
    });

    // JSON will show up as [object object]
    console.log('response: ' + response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  // video is the object fetched from the YouTube API
  onVideoSelect = video => {

    console.log("A new video has been selected: " + video);
    this.setState({ selectedVideo: video });
    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">

            {/* selected video in the center of the page */}
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">

              {/* being sent to VideoList so that the JSX for it can be rendered */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
                x={this.state.x}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
