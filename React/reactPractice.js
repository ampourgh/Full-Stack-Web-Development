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

/* -------------------------------------------*/

// Class is reserved in JavaScript, so use className in JSX to refer to class in HTML
import React from 'react';
import ReactDOM from 'react-dom';

var myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, 
                document.getElementById('app'))

/* -------------------------------------------*/

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" >
    <article>
      I LIKE TO SIT
      
      // <br> needs a closing tag, unlike it's html counterpart    
  
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  
  // Having curly braces makes the numbers behave like JavaScript instead of JSX
  // So output is '5'
  
  <h1>2 + 3 = {2 + 3}</h1>,
  document.getElementById('app')
);

/* -------------------------------------------*/

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}/>
);

ReactDOM.render(kitty, document.getElementById('app'));

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'doggy' : 'kitty']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

// the key is for knowing where the item is on a list
// or when, for instance, the list needs to be reshuffled
const peopleLis = people.map((person, i) =>
  // expression goes here:
	<li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, 
		document.getElementById('app'))
		
/* -------------------------------------------*/

const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);

// the code above translates to the following:
// const greatestDivEver = <div>i am div</div>;

/* -------------------------------------------*/

import React from 'react';

// manipulates the DOM, which the React import does not do
import ReactDOM from 'react-dom';

// create class 'MyComponentClass' (class needs to adhere to JS' syntax guidelines),
// needs instructions from subclass 'extends React.Component'
class MyComponentClass extends React.Component {
	
  // render instructions are inserted here
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

/* -------------------------------------------*/

// renders content within the parenthesis 

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" 
            href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src}
          	 alt={owl.title}/>
      </div>
    );
  }
}

ReactDOM.render(<Owl />, 
                document.getElementById('app')
)

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    
    var friend = friends[1]
    
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src}/>
      </div>
    );
  }
}

ReactDOM.render(<Friend />, 
                document.getElementById('app')
)

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
    return 'whatever-your-name-is-goes-here';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

/* -------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));

/* -------------------------------------------*/

