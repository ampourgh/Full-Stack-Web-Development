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

/* FUNCTIONS PRATICE */

// return int array
filter_list = (array) => {
  return array.filter(positiveInt = (val) => {
    return typeof val == 'number';
  });
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

/*
return number of time letter occurs & number of letters that duplicated

"abcde" -> 0  no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  text = { ...text.split('').sort() }
  console.log(text);
  var count = 0;
  var lastDiffIndex, lastText, stopPoint;

  for (var index in text) {

    if (text[index] == lastText) {
      lastText = text[index];
    } else {

      stopPoint = index - lastDiffIndex;

      if (stopPoint > 1) {
        console.log(lastText + ' happened ' + stringth(stopPoint) + '.');
        count += 1;
      }

      lastDiffIndex = index
      lastText = text[index];
    }
  }

  console.log(count);
}

stringth = (num) => {
  var stringthArr = ['once', 'twice', 'thrice', 'four times', 'five times', 'more than six times'];

  return num < 5 ? stringthArr[num - 1] : stringthArr[5];
}

duplicateCount("aabbcde");
duplicateCount("Indivisibilities");
