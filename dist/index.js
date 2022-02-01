"use strict";
// Basic types
let id = 5;
let company = 'Cognism';
let isMerried = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = ['Hello', '2', 1, 2, true];
// ids.push("Hello"); Error
// Tuple
let person = [
    1,
    'Franko',
    'Stipanov',
    44,
    true,
];
// Tuple array
let employee = [
    [1, 'Brad'],
    [2, 'Franko'],
    [55, 'Michael'],
];
// Union
let pid;
pid = 22;
pid = '23';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
