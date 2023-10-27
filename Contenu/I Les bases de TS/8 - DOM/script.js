"use strict";
// Type Assertion
let txt;
txt = "str";
const form = document.querySelector('form');
console.log(form.children);
// Type Casting
const form2 = document.querySelector('form');
const form1 = document.querySelector('.form-container');
console.log(form2.children);
const input = document.querySelector('input');
function handleSubmit(e) {
    e.preventDefault();
    console.log(input.value);
}
form.addEventListener('submit', handleSubmit);
window.addEventListener('click', handleClick);
function handleClick(e) {
    console.log(e.clientX, e.clientY);
}
const paragraphList = document.querySelectorAll('p');
paragraphList.forEach((p) => {
    console.log(p.textContent);
});
