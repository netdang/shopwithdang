"use strict";

// async function tast (name , time) {
//     setTimeout(() => {
//         console.log(`Task ${name} completed.`);
//     }, time);
// }

// tast("A" , 2000);
// tast("B" , 600);
// tast("C" , 300);
function waitTast(name, time) {
  setTimeout(() => {
    console.log(`Task ${name} completed.`);
  }, time);
}

async function runAll() {
    waitTast ("A" , 2000);    
    waitTast ("B" , 500);    
    waitTast ("C" , 300);    

}
runAll(); 