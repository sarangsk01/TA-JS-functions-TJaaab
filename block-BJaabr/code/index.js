// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return String(n+1);
}
// - Write a Function Expression
let addOne = function (n) {
  return String(n+1);
};
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => string(n+1);
// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return string(n+1);
}
// - Execute the function
addOne =(44);
// - Execute the function and store the return value in a variable.
let add = addOne(44);
// - What is the typeof returnValue
// typeof add is "string";
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
 function substractOne (n){
  return `${n - 1}`;
}

// - Write a Function Expression
let substractOne = function (n){
  return `${n - 1}`;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (n) => `${n-1}`;
// - Write an Arrow Function with curly brackets
let substractOne = (n) => {
  return `${n - 1}`;
}
// - Execute the function
substractOne(n);
// - Execute the function and store the return value in a variable.
let sub = substractOne(n);
// - What is the typeof returnValue
// typeof sub is "string";
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA,numB){
  return numA + numB;
}
// - Write a Function Expression
let sum = function(numA,numB){
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA,numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA,numB) =>{
  return numA + numB;
}
// - Execute the function
sum(34,57);
// - Execute the function and store the return value in a variable
let total = sum(34,57);
// - What is the typeof returnValue
// typeof total is "string";
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n){
  return `${n} ${n * n}`;
}
// - Write a Function Expression
let square = function(n){
  return `${n} ${n * n}`;
}
// - Write an Arrow Function without curly brackets(if possible)
let square =  (n) => `${n} ${n * n}`;
// - Write an Arrow Function with curly brackets
let square =  (n) => {
  return `${n} ${n * n}`;
} 
// - Execute the function
square(9);
// - Execute the function and store the return value in a variable
let sq = square(9);
// - What is the typeof returnValue
// typeof sq is "string";
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){return true;
  }else{
    return false;
  } 
}
// - Write a Function Expression
let isGreater =function(x,y){
  if(x>y){return true;
  }else{
    return false;
  } 
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater =(x,y) =>` if(x>y) true`;
  `else false`;
   

// - Write an Arrow Function with curly brackets
let isGreater =(x,y) => {
  if(x>y){
    return true ;
  }
  else {
    return false;
  } 
}
// - Execute the function
isGreater(25,87);
// - Execute the function and store the return value in a variable
let greater =isGreater(25,87);
// - What is the typeof returnValue
// typeof greater is "string";
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(numC){
  if(numC % 2 === 0){
    return `Number is even`;
  } else{
    return `Number is odd`;
  }
}

// - Write an anonymous Function Expression
const oddOrEven = function (numC) {
  if(numC % 2 === 0){
    return `Number is even`;
  } else{
    return `Number is odd`;
  }
}
// - Write an named Function Expression
const odd = function oddOrEven(numC) {
  if(numC % 2 === 0){
    return `Number is even`;
  } else{
    return `Number is odd`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (numC) => if(numC % 2 === 0) { return `Number is even`;}  
 else {
  return `Number is odd` ;
 }
// - Write an Arrow Function with curly brackets
let oddOrEven = (numC) => {
  if(numC % 2 === 0){
     return `Number is even` ;
    } else {
      return `Number is odd` ;
    }
  }
// - Execute the function
oddOrEven(59);
// - Execute the function and store the return value in a variable
let oen =oddOrEven(59);
// - What is the typeof returnValue
// typeof greater is "string"