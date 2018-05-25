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

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

/* ---------------------------------- */

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal => animal[0]);

/* ---------------------------------- */

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(number => number < 250);

console.log(smallNumbers);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// Refactor the code above using arrow function syntax
console.log(longFavoriteWords);

/* ---------------------------------- */

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  hobbies: [],
  sayHello: (name) => {
  	return `Hello, ${name}!`;
  },
  sayGoodbye() {
  	return `Hello, my name is ${this.name}`;
  },
};

let friend = {
  name: 'Dean'
}

friend.sayGoodbye = person.sayGoodbye;

person.hobbies.push('videogames', 'journalism')

console.log(person.hobbies)

person.hobbies = ['caligraphy']

console.log(person.hobbies)

console.log(person['name']);
console.log(person['age']);

console.log(person.sayHello('Steve'))
console.log(person.sayGoodbye)

let day = 'Friday';
let alarm;

day === 'Saturday' || day === 'Sunday'?
alarm = 'weekendAlarm':
alarm = 'weekAlarm';

console.log(person[alarm]);

/* ---------------------------------- */

console.log(surgeonCurry.remainingVacationDays);

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};
get
person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);

/* ---------------------------------- */

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  static generatePassword() {
    const randomNumber = Math.floor(Math.random()*10000);
    return randomNumber;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

/* ---------------------------------- */

// 1-Airplane.js
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane; 

// 1-missionControl.js
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/* ---------------------------------- */
