"use strict";

let username = "Marina";
//function no parameter
function greet() {
  console.log("Hello Nice to meet you!");
}

const greetArrow = (stuName) =>
  console.log(`Hello Nice to meet You ${stuName} arrow function`);
greet();
greetArrow(username);
// fuction has parameter no return
function greet1(stuName) {
  console.log(`Hello Nice to meet You ${stuName}`);
}
greet1(username); //marina => stuName of greet fuction

function sum(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(4, 8);

// function has no parameter and has return value
function sunOfFourAndFive() {
  let num1 = 4;
  let num2 = 5;
  return num1 + num2;
}
let result = sunOfFourAndFive();
console.log("result of return function:", result);

// function has parameter and has return value
function multiplecation(num1, num2) {
  let total = num1 * num2;
  return total;
}

const multiplecationArrow = (num1 = 4, num2 = 5) => {
  return num1 * num2;
};
let multiArrow = multiplecationArrow(6, 4);
console.log("Result from Arrow", multiArrow);

let multiplecationResult = multiplecation(6, 9);
console.log("mutiplacation Result " + multiplecationResult);

//console.clear();
// function expression
const sayHi = function (name) {
  console.log(`Hi ${name}`);
};
sayHi("Marina");

//Arrow function
const goodEvening = () => {
  console.log("Good Evening!!");
};

goodEvening();

// nested function
function outer() {
  console.log("outer function");
  const inner = () => {
    console.log("inner function");
  };
  inner();
}
outer();

// callback  function
const grreetCallBack = (username, callback) => {
  console.log("Hello" + username);
  callback(); //console.log("Good bye from callback");
};

const bye = () => console.log("Good bye from callback");
grreetCallBack("Marina" , bye); // bye is callback function but dont call ()
