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
  Up = 2,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

const user: { id: number; name: string } = {
  id: 1,
  name: 'John',
};

// This is the same
type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 2,
  name: 'Mark',
};

// Type Assertion
let cid: any = 1;
// let customerId=<number> cid;
let customerId = cid as number;

customerId = 15;

// Functions

// return is also number
function add(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

log(1);
log('Text');
