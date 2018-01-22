import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube v3 API key from console.developers.google.com
const API_KEY = 'AIzaSyA0N8QmUhKX-L3FV36vcchMmIh6oaW4ASo';

// declaring a variable
// but const is a constant/final value
// () => takes the place of a function
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// render App function
ReactDOM.render(<App />, document.querySelector('.container'));
