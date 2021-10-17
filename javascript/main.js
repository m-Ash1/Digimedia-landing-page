/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(7)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.split(" ")[0]} ${a.split(" ")[2]}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a.slice(0,2).toLowerCase()}${a.slice(2).toUpperCase()}`); // eLZERO WEB SCHOOl
