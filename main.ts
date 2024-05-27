// split //
let sentence:string = "i am learning typescript";
let words:string[] = sentence.split(" ");
console.log("split:", words);

//slice //
let coloursName:string = "red,blue,black,white";
let slice:string = coloursName.slice(0,8);
console.log("slice:", slice);

// charAt //
let charAtindex:string = coloursName.charAt(0);
console.log("charAT:", charAtindex);

// charAT AND slice //
let message:string = "old is gold";
let sliced:string = message.slice(0,3);
console.log("slice:", sliced);

let charAtindex2:string = message.charAt(7);
console.log("charAt:", charAtindex2);