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
