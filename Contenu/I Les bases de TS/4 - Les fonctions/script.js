"use strict";
function multiply(num1, num2 = 10, action) {
    if (action) {
        console.log(action);
    }
    return num1 * num2;
}
console.log(multiply(10, 2));
let foo;
foo = () => { };
// Function signature
let baz;
baz = (a, b) => a + b;
// Callback
function greetings(fn) {
    fn('Hello');
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
