// console.log(globalVar);

import { exportedVar } from "./moduleScript.js";

console.log(exportedVar);

// console.log(moduleVar);  // undefined - only available in it's file (moduleScrip.js) unless exported


// module scope means that variables are only accessible inside the file they're defined in

function test() {
  const b = 2

  if (true) {
    const c = 3
    console.log(b, c);
  }
  console.log(b, c);
}



test();

// anything inside of curly braces {} makes a block scope

