import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube v3 API key from console.developers.google.com
const API_KEY = 'AIzaSyA0N8QmUhKX-L3FV36vcchMmIh6oaW4ASo';

// declaring a variable
// but const is a constant/final value
// () => takes the place of a function
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // immediately searches for term
    YTSearch({key: API_KEY, term: term}, (videos) => {

      // videos: videos is condensed to videos, the key: variable takes the function variable
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // makes videoSearch run every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// render App function
ReactDOM.render(<App />, document.querySelector('.container'));
