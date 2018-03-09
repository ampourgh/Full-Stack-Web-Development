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

/* ---------------------------------- */

// needs to be a let var to be taken into function
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log(`Order: ${crustType}` + '\n' + `pizza topped with ${topping}`);
}

const getSubTotal = (itemCount) => {
	const total = itemCount * 7.50;
  console.log(`Your total is ${total}.`);
  return total
}

const getTax = (total) => {
 const tax = total * .06;
  console.log(`Additional tax is ${tax}.`);
	return tax
}

takeOrder('mushroom', 'thin crust');
takeOrder('bacon', 'cheese crust');
takeOrder('extra cheese', 'thin crust');

getTax(getSubTotal(orderCount)); 

/* ---------------------------------- */

// refactor this function with a single parameter:

const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
}

// to this function:

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

/* ---------------------------------- */

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);  
    }
  console.log(lightWaves);
};

visibleLightWaves();
console.log(lightWaves);
// above code returns:
// /home/ccuser/workspace/javascript_101_Unit_3b/light.js:12
// console.log(lightWaves);

/* ---------------------------------- */

const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    console.log(i);  
  }
};

starCount();
console.log(i); 
// console.log(i); 


/* ---------------------------------- */

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];
for(let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++){	console.log(`I would love to visit ${vacationSpots[vacationSpotIndex]}`);  
};

/* ---------------------------------- */

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');

/* ---------------------------------- */
