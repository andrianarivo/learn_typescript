"use strict";
// L'opérateur !
const container = document.querySelector('.container');
console.log(container.children);
const user1 = {
    title: "Dev Front-End",
    //description: "Développeur de sites internet.",
    salary: 30000
};
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description);
// Optional Parameter
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message provided");
    }
}
message('Hello World');
const house1 = {
    room: 4,
    price: 30000
};
// ?? opérateur
const data = false;
const display1 = data !== null && data !== void 0 ? data : "Hello World"; // triggers on null | undefined
const display2 = data || "Hello World"; // triggers on falsy values: 0, '', "", undefined | null,
// false
console.log('display1', display1);
console.log('display2', display2);
// Never
function alertUser(msg) {
    throw msg;
}
alertUser("Alerte, comportement dangereux");
