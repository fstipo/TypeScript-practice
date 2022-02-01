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
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: 'John',
};
const user2 = {
    id: 2,
    name: 'Mark',
};
// Type Assertion
let cid = 1;
// let customerId=<number> cid;
let customerId = cid;
customerId = 15;
// Functions
// return is also number
function add(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
log(1);
log('Text');
