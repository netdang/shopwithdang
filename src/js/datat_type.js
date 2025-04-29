"use strict";

//create object
const person = {
  name: "jessica",
  gender: "female",
  age: 21,
  isStuent: true,
};

const person2 = new Object();
person2.name = "jessca";
person2.age = 21;

// access object properties
console.log("person 1:", person);
console.log("person 2:", person2);

console.log(
  `Hello, my name is ${person.name} I am ${person.age}year old. I am a ${person.gender}.`
);
console.log(`Hi, I'm ${person2["name"]}. I am ${person2["age"]}year old.`);

//modify object properties
person.name = "leakna";
person["age"] = 20;
person.isStuent = false;

// add object properties
person.nationality = "Cambodian";
person.email = "jessica@gmail.com";
console.log("Person after modifying:", person);
console.log("isStudent:", person.isStuent);

//nested object
const person3 = {
  name: "john",
  address: {
    coountry: "USA",
    state: "Florida",
    postalCode: 2312,
    resident: {
      streetNo: "21st",
      addressNo: 324,
    },
  },
};
//access nested object properties
console.log("Person3:", person3);
console.log("Person3's country:", person3.address.coountry);
console.log("Person3's street number:", person3.address.resident.streetNo);

// methods in object
const cat = {
  name: "Grace",
  color: "while",
  meow() {
    return `My name is ${this.name}.Meow`; // this mean use oject properties
  },
  sum() {
    let a = 4;
    let b = 7;
    return a + b;
  },
};

// accesss object's methods
console.log("cat:", cat);
console.log("Cat meow", cat.meow());
console.log("Sum:", cat.sum());
console.clear();
// Destucturing
const user = {
  names: "jessica",
  age: 18,
  coountry: "Cambodia",
  address: {
    city: "Phnom Penh",
    houseNo: 54,
  },
};
console.log(user.names);
console.log(user.coountry);
console.log("City:", user.address.city);
// renaming variable
const { names: students, age: studentsAge, coountry } = user;
const {
  address:city, houseNo
}=user

console.log("After destructuring:");
console.log(students);
console.log(studentsAge);
console.log(coountry);
console.log(city);
console.log(houseNo);
