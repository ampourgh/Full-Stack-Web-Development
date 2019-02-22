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
