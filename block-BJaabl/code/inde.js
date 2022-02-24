//1. What would the following function return (not output) when called? Write the output next to function call.//

-


function test() {
  alert('Hello');
}
test(); // output


-


function test() {
  return;
}
test(); // output


-


function test() {
  return 21;
}
test(); // output


-


function test() {
  return null;
}
test(); // output


-


function test() {
  console.log('hello');
}
test(); // output


-


function test() {
  prompt('Enter your age?');
}
test(); // output


-


function test() {
  return prompt('Enter you age');
}
test(); // output


-


function test() {
  return function second() {};
}
test(); // output


//2. What will be the value of test variable in the snippet below//


function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let test = sayHello();


//3. What will be the value of test variable and output of console.log() in the snippet below//


let username = 'Sam';
function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let test = sayHello();
console.log(username);


//3. What will be the value of test and output of console.log() variable in the snippet below//


let username = 'Sam';
function sayHello() {
  return `Hello ${username}`;
}
let test = sayHello();
console.log(username);

