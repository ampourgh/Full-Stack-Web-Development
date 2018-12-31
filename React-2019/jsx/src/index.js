// Import React & ReactDOM - ES2015 import (not using Common.js require module system)
import React from 'react';
import ReactDOM from 'react-dom';


// Create React component
const App = () => {

  const enterValue = 'Enter your NAME here';

  return (
    <div>
      {/* Hello world */}
      <div className="awesome" style={{border: '1px solid red'}}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>{ enterValue }</p>
    </div>
  );
};

// Take React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
