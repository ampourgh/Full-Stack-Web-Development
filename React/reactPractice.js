// Ex. JSX contained within an object
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

/* -------------------------------------------*/

// If JSX takes more than 1 line, put in parenthesis
var myDiv = (
  // need to div wrapper for multiple elements
  <div id = 'some-id'>
    <h1>
      Hello world
    </h1>
    <article>
      An article goes here.
     </article>
  </div>
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

// render using reactDOM library
ReactDOM.render(<h1>Render me!</h1>, 
                document.getElementById('app'));

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);
