object literal
cat = {};
cat = {
  sound: 'meow',
  speak: function() {
    console.log(this.sound);
  }
};
cat.speak();
//>>> 'meow'

let speakFunction = cat.speak;
speakFunction();
// >>> undefined
// above is no long a cat method,
// so doesn't have access to meow


// INSTEAD

let speakFunction = speakFunction.bind(cat);
speakFunction();
// >>> 'meow'


let person1 = {
  name: 'Emerson'
};

let person2 = {
  name: 'ampourgh'
};

function namer() {
  return this.name;
};

namer();

console.log(namer.bind(person1)());
console.log(namer.bind(person2)());

let person1 = {
  name: 'Emerson'
};

let person2 = {
  name: 'ampourgh'
};

function namer() {
  return this.name;
};

namer();

console.log(namer.bind(person1)());
console.log(namer.bind(person2)());
