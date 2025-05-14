"use strict";

let age = 11;
let height = 1.4;
//condition if else if
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 11 && age < 18) {
  console.log("You are teenager");
} else {
  console.log("You are a baby");
}



// switch
let day = 0;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Thusday");
    break;
  }
  case 3: {
    console.log("wendesday");
    break;
  }

  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Invalid Day");
    break;
  }
}
