// Basic types

let id: number = 5;
let company: string = 'Cognism';
let isMerried: boolean = true;
let x: any = 'Hello';
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = ['Hello', '2', 1, 2, true];

// ids.push("Hello"); Error

// Tuple
let person: [number, string, string, number, boolean] = [
  1,
  'Franko',
  'Stipanov',
  44,
  true,
];

// Tuple array
let employee: [number, string][] = [
  [1, 'Brad'],
  [2, 'Franko'],
  [55, 'Michael'],
];

// Union
let pid: string | number;
pid = 22;
pid = '23';

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
