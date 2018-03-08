const myName = 'ampourgh';
let myCity = 'Austin';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

>>> My name is Midi. My favorite city is Austin.

/* ---------------------------------- */

let userName = 'ampourgh';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

// if (!ready) <-- for not operator

>>> Great, ampourgh! Get ready to practice your JavaScript!

/* ---------------------------------- */

let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new': 
    console.log('Back on two feet');
    break;
  default: 
    console.log('Invalid moon phase');
    break;
}

>>> Howl!

let isLocked = false;

isLocked ?
console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
console.log('Correct!'):
console.log('Incorrect!');

/* ---------------------------------- */

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
console.log('I love that!'):
console.log("I don't love that!");
