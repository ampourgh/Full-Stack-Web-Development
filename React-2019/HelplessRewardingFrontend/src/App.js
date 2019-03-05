import React, { Component } from 'react';
import Something from './Something.js';
import Something2 from './Something2.js';
import Something3 from './Something3.js';

class App extends Component {
  render() {
    return (
      <div>
        <Something />
        <Something2 />
        <Something3 />
      </div>
    );
  }
}

export default App;
