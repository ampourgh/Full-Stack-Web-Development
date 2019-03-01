// JSON
var jsonObjects = {
  "staff": [
    {
      "emerson" : {"name" : "emerson"},
      "emery" : {"name" : "Emery"},
      "emmy" : {"name" : "Emmy"}
    }
  ]
};

console.log(jsonObjects['staff'][0]['emery']['name']);

// Timer
function myFunc(text, callback) {
  setTimeout(function() {
    callback(text);
  }, 2000);
}
myFunc('Hello world!', console.log);

// Array Add/Get Method

var addMethod = 'add',
    getMethod = 'get';

var collection = {
  items: [],
  [addMethod](...items) {
    this.items.push(...items);
  },
  [getMethod](index) {
    return this.items[index];
  }
};

collection[addMethod]('first', 'second', 'third', 'fourth', 'fifth');
console.log(collection[getMethod](2)) // >>> third


/*
The generator function in JavaScript returns a Generator object. Its syntax is similar to function expression, function declaration or method declaration, just that it requires a star character *.

The generator function can be declared in the following forms:
*/

//  a. Function declaration form function* <name>():
function* indexGenerator1(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
var g = indexGenerator1();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1


// b. Function expression form function* ():
var indexGenerator2 = function* () {
  var index = 0;
  while(true) {
    yield index++;
  }
};
var g = indexGenerator2();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// c. Shorthand method definition form *<name>():
var obj = {
  *indexGenerator3() {
    var index = 0;
    while(true) {
      yield index++;
    }
  }
}
var g = obj.indexGenerator3();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// Object to function
const person = {
  name: 'Emerson',
  age: 29
}
function introduce({ name, age }) {
  console.log(`I'm ${name} and I'm ${age} years old!`);
}

person.name = 'Marin';
person.age = 30;
console.log(introduce(person));

// Function* next value
function* greeter() {
  yield 'Hi';
  yield 'How are you?';
  yield 'Bye';
}
const greet = greeter();
console.log(greet.next().value);
// 'Hi'
console.log(greet.next().value);
// 'How are you?'
console.log(greet.next().value);
// 'Bye'
console.log(greet.next().value);
// undefined

// infinite version
function* idCreator() {
  let i = 0;
  while (true)
    yield i++;
}
const ids = idCreator();
console.log(ids.next().value);
// 0
console.log(ids.next().value);
// 1
console.log(ids.next().value);
// 2
