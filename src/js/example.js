"use strict";

let text = document.getElementById("text");
let lists = document.querySelector("#lists");
let image = document.querySelector("#image"); //image is null because no have image
let confessText = document.querySelector("#confessText");
let noBtn = document.querySelector("#noBtn");
let yesBtn = document.querySelector("#yesBtn");
let usernameinputfield = document.querySelector("#username");
let summitBnt = document.querySelector("#submit");
let usernameInputted = document.querySelector("#inputName");

let pinkText = "text-pink-400";
let blueText = "text-sky-400";

function showText() {
  text.innerHTML = "I Love You";
}

let orderNum = 0;
console.log("default orderNum:", orderNum);
function addListItem() {
  let listItem = document.createElement("li");
  listItem.innerHTML = "Net List Item";
  lists.appendChild(listItem);
  orderNum++; // orderNum = orderNum + 1
  console.log(orderNum);
}

function removeListItem() {
  let lastListItem = document.querySelectorAll("li")[orderNum];
  lists.removeChild(lastListItem);
  orderNum--; // oderNun = order - 1;
  console.log("after remove", orderNum);
}

let noBtnScale = 1;
let yesBtnScale = 1;

noBtn.addEventListener("click", function () {
  // image.setAttribute(
  //   "src",
  //   "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp"
  // );
  image.src = "https://pbs.twimg.com/media/EAmr-PAWsAEoiWR.jpg";
  confessText.innerHTML = "ohh no, i'm so so sad nas";
  console.log("image src:", image.getAttribute("src"));
  confessText.classList.remove(pinkText);
  confessText.classList.add(blueText);
  // confessText.classList.toggle(pinkText);
  noBtnScale = noBtnScale - 0.1;
  yesBtnScale = yesBtnScale + 0.2;
  // console.log("no button scale:",noBtnScale);
  // console.log("yes button scale:",yesBtnScale);
  noBtn.style.transform = `scale(${noBtnScale})`;
  yesBtn.style.transform = `scale(${yesBtnScale})`;
  noBtn.style.color = "white";
});

yesBtn.addEventListener("click", function () {
  // image.setAttribute(
  //   "src",
  //   "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp"
  // );
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWLgWPHM97B1GrBblKHSyo-YPmOnT2y72BQ&s";
  confessText.innerHTML = "ohh no, i'm so so Happy nas";
  console.log("image src:", image.getAttribute("src"));
  confessText.classList.remove(blueText);
  confessText.classList.add(pinkText);
  // confessText.classList.toggle(blueText);
});

summitBnt.addEventListener("click", function (event) {
  event.preventDefault();
  let username = usernameinputfield.value;
  usernameInputted.innerHTML = username;
  usernameinputfield.value = "";
});

// primitive
let fruit = "apple";
console.log("fruit", fruit);
// fruit[1] = "b";
// console.log("fruit ater chang", fruit);

// check string length
let sentence = `I'm an "IT" student`;
console.log("String length:", sentence.length);

//chang case
let stuName = "john doe";
console.log("Student's name uuppercase:", stuName.toUpperCase());

// slice
let texts = "JavaScript";
let slicedText = texts.slice(0, 5);
console.log("sliced text:", slicedText);

//replace string
let leranJs = "I Love JavaScript";
let learnPy = leranJs.replace("JavaScript", "Pyton");
console.log("learnPy" ,learnPy);

//split
let fruits = "Apple , banana , orange";
let splittedFruit = fruits.split(",");
console.log("Splitted fruit:", splittedFruit);
console.log(splittedFruit[0]);

// string
let studentName = "Dang";
let studentAge = "26";
console.log(
  "Hello my name is " + studentName + ". I am " + studentAge + "year old"
);
console.log(`Hi , I'm "${studentName}". I;m ${studentAge} year old`);

// datatype
let heading = document.querySelector("#text");
heading.innerHTML = `Hi I'm <span class="text-yellow-200">${studentName}</span>.
I'm ${studentAge} year old.`;

let integer = 5;
let float = 3.15;
console.log("integer:", integer);
console.log("type of integer:", typeof integer);
console.log("float:", float);
console.log("type of float:", typeof float);

let num2 = 5e6 + 5e5; // 5 x 10^6 x 10^5
console.log("number with e:", num2);

console.log(-9 / 0);
console.log("4" - 4);

const PI = 3.14159;
console.log("PI value:", PI);
console.log("PI value 2 decimal points:", PI.toFixed(2));

let width = "98.12px";
let height = "40.54px";

let widthInt = parseFloat(width);
console.log("width:", widthInt);
let heightInt = parseInt(height);
console.log("heightInt:", heightInt);

let area = widthInt * heightInt;
console.log("Area:", +area.toFixed(2) + "px");

let num3 = 85899345913984357n;
let num4 = num3 + 1n;
console.log("third number:", num3);
console.log("type of third number:", typeof num3);
console.log("forth number:", num4);

let isJavaScriptFun = true;
let isJavaScriptEasy = false;
console.log("Type of isJavaScriptFun:", isJavaScriptFun);
console.log("isJavaScriptFun:", isJavaScriptFun);

console.log(!isJavaScriptFun);
if (NaN) {
  console.log("JavaScript is fun and easy!!");
}

let empty;

console.log("empty value:", empty);
console.log("type of emply:", typeof empty);

let studentName2 = null;

if (studentName2) {
  console.log("Hello " + studentName2);
} else {
  console.log("Pleas input your name");
}
