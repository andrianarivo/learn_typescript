"use strict";
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine("Test1", "Test2"));
console.log(combine(50, "Test2"));
console.log(combine("Test1", 1));
console.log(combine(50, 1));
