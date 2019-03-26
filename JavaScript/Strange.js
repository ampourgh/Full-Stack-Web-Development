/*


NOTE: Name / Value Pair
- includes variable and what the value is on the right side
- azlong with json data which branches off with name that has another set of names as value


NOTE: Global Objects
- When creating a page with JavaScipt syntax, the global objects get called, including:
> This
> Window

In first example, the var and function get attached to the global object
when it's called on in the console, you can retrieve the value pair

var a = 'Hello World!';

function b() {

}

> a
>>> 'Hello World!'

OR window.a OR this.a


NOTE: Hoisting

Creation phase of JavaScipt env includes:
- global obj
- this
- outer env

So recognizes where you created vars & functions,
which sets up memory space for the hoisting

// The hoisted values; above the actual declaration
b();
console.log(a);

// stored in initialized env
var a = 'Hello World!';

function b() {
    console.log('Called b!');
}


NOTE: Undefined & Execution

Suggested to use undefined for debugging, even if you can declare a varaible undefined after it has already been declared
Declaring a variable without giving it a value pair will make it stayed undefined


NOTE: Single Threaded Execution

Meaning: one command is being executed at a time, JavaScript from a programmer's perspective works in a single threaded manner

NOTE: Syncronous


NOTE: Invocation

Meaning running or calling a function; in JavaScript you do that by using the parenthesis

a = () => {
  b();
  var c;
}

b = () => {
  var d = 'd1';
  console.log(d);
}

a();
var d = 'd2';
console.log(d);

>>> d1
>>> d2


NOTE: Execution Context

function b() {
	var myVar; // This will be logged as undefined
  console.log(myVar);
}

function a() {
	var myVar = 2; // this will be logged as 2
  console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar); // logged as 1, this is the global execution context
a();
console.log(myVar); // logged as 1 again


NOTE: Scope Chain

The variable will be sent from the global level upwards,
if the same variable exists within the scope of the inner function, it will take its place
but will not take its place outside of the scope

function a() {

    function b() {
        console.log(myVar);
    }

	b();
}

var myVar = 1;
a();

if in b():
var myVar = 10
console.log after a() (at the end of the script) will be 1
if myVar is = 10 without a var declaration, the console.log will be 10

SCOPE CHAIN: b() -> a() -> global


NOTE: ASYNCRONOUS REQUESTS

Such as the engines that JavaScipt interacts with, such as the renderer and HTTP request



NOTE: TYPES OF DATA

Dynamic typing: engine figures out what kind of data your variable is holding
Static typing: other programming languages (such as Java or C), will need specification during declaration


NOTE: Primitive Type

A single value, not an object
- undefined: lack of existence
- null: you can define this lack of existence
- boolean
- number (only one type in JS, instead of there being an int or float)
- string
- symbol: in ES6, not supported in all the browser, and introduced in ESC6

NOTE: OPERATORS

Operator is basically like the arithmetic symbols, which are in actuality diguised functions

There's pre-fix and post-fix, and in JavaScipt we primarily work in in-fix notation

NOTE: Operator Precedence + Operator Associativity

Similar to math concepts

console.log(3 + 4 * 5); // 3 + 20
>>> expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
>>> expected output: 36

var a;
var b;

console.log(a = b = 5);
>>> expected output: 5;

Associativity example:

var a = 1, b = 2, c = 3;

a = b = c;

console.log( a + b + c ) <-- which would translate to 4 + 4 + 4
>>> 12

Right to left assciativity

The highest to lowest precedence can be found on MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

NOTE: COERCION

Converting a value to one type to another.

Example:

var a = 1 + 2;
>>> 3

var a = 'hello ' + ' world';
>>> 'hello world'

var a = 1 + '2';
>>> 12

JavaScript has a it's own logic under the hood that translates the string into an int

NOTE: COMPARISON OPERTATORS

console.log(1 < 2 < 3);
>>> True

console.log(3 < 2 < 1);
>>> True

The reason for the above is because it goes left to right; 3 < 2 is false, and 1 is greater than false (0)

Some of the negatives of JS is that null and undefined do not == 0, but are < 1

"" == 0;
>>> True

Use strict equality and inequality when doing comparisons,
and only use non-strict when you know the implicatiosn of the outcome

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
