"use strict";

let x = 12;
let y = 5;

// x += 5; // x = x + 5
// x -= 5;  // x = x -5
// x *= 5; // x = x* 5
// x /=5 ; // x = x/ 5
x %= 5; // x = x% 5 2
console.log(x);

console.log("arimetic:", y ** x); // ស្វ័យគុណ​** 5^2
x++; // x = x + 1; x +=1
console.log(x);
x--; // x = x- 1 ; x -=1
console.log(x);

console.log("Comparison Operators");
console.log(x > y); //false
console.log(x < y); // true
console.log(x == y); // false compare value dont't care string
console.log(x === y); // false compare value and datatype
let l = 5;
let i = "5";
console.log(i != l); // false copare string
console.log(i !== l); // true
console.log(l != y); //របស់ដែលស្មើគ្នា​ false​​របស់ដែលមិនស្មើគ្នាtrue

//logical opt
console.log(true && true); //true
console.log(true && false); //fales
console.log(true || true); // true
console.log(true || false); // true
console.log(!true);

console.log("Ternary Opt");

let age = 18;
// if (age >= 18) {
//   console.log("You can marrid");
// } else {
//   console.log("i can't marrid");
// }
age >= 18 ? console.log("You can marrid ") : console.log("You can't marrid");

let mark = 98;
let result;
if (mark >= 50) {
  result = "Pass";
} else {
  result = "fail";
}
console.log(result);
mark >= 50 ? console.log("Pass") : console.log("Fail");

let number = -6;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Nagative");
} else {
  console.log("Zero");
}
number >= 0
  ? number === 0
    ? console.log("Zero")
    : console.log("Positive")
  : console.log("Negative");
