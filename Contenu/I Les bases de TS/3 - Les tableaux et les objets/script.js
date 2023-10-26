"use strict";
const fruits = ['strawberry', 'apple'];
fruits.push('cherry');
const mixedArray = [1, "txt", [1, 2, 3], { name: "John" }];
mixedArray.push([1, 2, 3, 4, 5]);
let nums;
// nums.push(1) // Errror (nums is undefined)
// nums.push('str') // Error
nums = [1, 2, 3, 4, 5];
let nums2 = [];
nums2.push(2);
let random;
random = [1, "txt", [1, 2, 3], { name: "John" }];
// Objects
const car = {
    name: 'Audi',
    model: 'A4',
    km: 70000
};
// car.name = 4 // Error
let profile;
profile = {
    name: 'John',
    age: 25
};
let user = {
    name: 'John',
    age: 25,
    favFood: ['pizza', 'burger'],
    data: {
        id: 1,
        username: 'john'
    }
};
let obj;
obj = {
    name: 'John',
    age: 25
};
