//1. GenBuzz
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Gen' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for GenBuzz below this line:
const myNumber = 25;
const num3 = 10;

if (Number.isInteger(myNumber)){
    console.log('Is Number');
}else{
    console.log('This is not a number');
}

if (myNumber % 3 == 0){ //checks if number is divisble by 3 evenly
    console.log('gen!');
}else{
    console.log(myNumber);
}

if (myNumber % 5 == 0){ //checks if number is divisble by 5 evenly
    console.log('Buzz!');
}else{
    console.log(myNumber);
}




//2. E-COMMERCE ITEM LIST

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:
/* let item = '';
const shoes = 50;
const jeans = 25;
const hat = 12;
const socks = 2; 
switch (item) {
    case 'shoes':
        console.log(`Shoes are ${shoes}`);
        break;
} */

const item = 'hat';

switch (item) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'jeans':
        console.log('Jeans are $25');   
        break; 
    case 'hat':
        console.log('Hats are $12');   
        break; 
    case 'socks':
        console.log('Socks are $2');   
        break; 
    default:
        console.log('Invalid Item');
}


//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

let min = 50;
let max = 100;

//const called  a which finds a random whole number between const min/max(50 and 100)
const a = Math.floor(Math.random() * (max - min)) + min; 

// shows that random number between 50 - 100
console.log(`Random value between ${min} and ${max} is ${a}`);

