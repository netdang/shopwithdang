"use strict";

let fruits = ["Banana", "Apple", "Strawbbery", "cherry", "Mango"];
console.log(fruits);

let numbers = new Array(1, 3, 5, "Aplle"); // constructer arry
console.log(numbers);

console.log(numbers[1]);
console.log(fruits[fruits.length - 1]); // last index array
fruits[0] = "Blueberry";
console.log(fruits);
fruits[2] = "Durian";
console.log(fruits);

// push(): add  item to the end of the arry
fruits.push("jackfruit");
console.log("after poping:", fruits);
fruits.pop();
console.log("After poping", fruits); // remove from end array
fruits.shift();
console.log("After shifting:", fruits); //remove first array
fruits.unshift("logan");
console.log("After unshifting:", fruits); // add to first array
console.log("Number of fruits", fruits.length);

// copy array
// 1.Using spread operator(...)
let animals = ["Dog", "Cat", "Dinosaur", "Hamster", "Mouse"];
let vegetable = ["Salad", "Cucumber", "Tomato"];
console.log(animals);
/*
modify array
animals = [10];
animals[0]= "dang"; 
*/
let arrCopy = [
  "Bird",
  "Rabbit",
  ...animals,
  "Capybara",
  "Parrot",
  ...vegetable,
];
console.log("After copying", arrCopy);

//2. copy using slice
let arrCoppy2 = animals.slice(2, 4);
console.log(arrCoppy2);
//3.copy using from
let arrCopy3 = Array.from(vegetable);
console.log(arrCopy3);

// 4. join or more arrays using concat
let arrCopy4 = animals.concat(vegetable);
console.log(arrCopy4);

//map() array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapNum = nums.map((n, index) => {
  let multiplication = n * 2;
  let result = `index of ${index}: ${n} x 2 = ${multiplication}`;
  return result;
});
console.log(mapNum);

let animalsCopy = arrCopy.map((animal, index) => `${index + 1}: ${animal}`);
console.log(animalsCopy);
console.log(animalsCopy[10]);

//Student list
let studentNames = [
  "Navorn",
  "Sovannara",
  "Thanouk",
  "Lokbong Dang",
  "Devin",
  "Ronaldo",
  "Missi",
  "Vini jr",
  "Rodrigo",
];

let lists = document.querySelector("#lists");
studentNames.map((stuName, index) => {
  let listItime = document.createElement("li");
  listItime.innerText = stuName;
  lists.appendChild(listItime);
});

console.clear();

//program ti fillter only even number using filter()number
let mixedNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let eventNum = mixedNumber.filter((num) => num % 2 === 0);
console.log(eventNum);

//includes search by name
let studentNameLover = studentNames.map((stuName) => stuName.toLowerCase());
console.log(studentNameLover);
let hasDevin = studentNameLover.includes("Devin".toLowerCase());
console.log(hasDevin);

// indexOf()
let seachRank = studentNameLover.indexOf("ronaldo") + 1;
console.log("search Rank by index " + seachRank);

//destructur array
let dogs = ["huskey", "gilden", "poodle", "pug"];
let [playful, kind, curly, cute] = dogs;
// let playful = "huskey";
console.log("Playful dog:", playful);
console.log("Curly doys:", curly);

//display students
let students = [
  {
    stuName: "Panno",
    gender: "M",
    age: 19,
  },
  {
    stuName: "Ronaldo",
    gender: "M",
    age: 40,
  },
  {
    stuName: "Missi",
    gender: "M",
    age: 36,
  },
];
let allStudentNames = students.map((stu) => stu.stuName);
console.log(students[0].stuName);
console.log("All students name:", allStudentNames);

//show student table
let tableBody = document.querySelector("#stuTableBody");

tableBody.innerHTML = students
  .map(
    (stu, index) => `
  <tr>
  <td class="border-1 border-blue-700 p-3">${index + 1}</td>
  <td class="border-1 border-blue-700 p-3">${stu.stuName}</td>
  <td class="border-1 border-blue-700 p-3">${stu.gender}</td>
  <td class="border-1 border-blue-700 p-3">${stu.age}</td>
  </tr>
  `
  )
  .join("");
