"use strict";
// split //
let sentence = "i am learning typescript";
let words = sentence.split(" ");
console.log("split:", words);
//slice //
let coloursName = "red,blue,black,white";
let slice = coloursName.slice(0, 8);
console.log("slice:", slice);
// charAt //
let charAtindex = coloursName.charAt(0);
console.log("charAT:", charAtindex);
// charAT AND slice //
let message = "old is gold";
let sliced = message.slice(0, 3);
console.log("slice:", sliced);
let charAtindex2 = message.charAt(7);
console.log("charAt:", charAtindex2);
