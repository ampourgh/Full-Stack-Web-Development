import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// YouTube v3 API key from console.developers.google.com
const API_KEY = 'AIzaSyA0N8QmUhKX-L3FV36vcchMmIh6oaW4ASo';

// declaring a variable
// but const is a constant/final value
// () => takes the place of a function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // immediately searches for term
    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {

      // videos: videos is condensed to videos, the key: variable takes the function variable
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// render App function
ReactDOM.render(<App />, document.querySelector('.container'));
