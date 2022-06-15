const number = window.prompt("Enter a number!");

if (number > 22) {
  console.log("Number in greater than 22!");
} else {
  console.log("Number was smaller the 22!Try again!");
}

console.log("Decision was made!");

function sum(x, y) {
  return parseInt(x) + parseInt(y);
}

// const operand1 = window.prompt("Enter operand1")
// const operand2 = window.prompt("Enter operand2")
// console.log(sum(operand1, operand2));

// console.log(operand1+operand2);

//console.log(2 % 2);

function isEven(x) {
  if (x % 2 == 0) {
    console.log("This numeber is even!");
  } else {
    console.log("This number is odd!");
  }
}

isEven(6);
isEven(13);

let num = 5;
//One equal is for attributing a value
//This will always be true

// if ((num = 11)) { //This is a bug!
//   console.log("Num is 5 !");
// }
console.log(num);

if (num == 5) {
  //hurray,num is 5!
}

if (num == "5") {
  //this is also true??
  //this only compares the valur
  //it will transform the value to compare them
}

if (num == "4") {
} //False
if (num == true) {
} //TRUE

//Will check value and type
//Both variables must be of same type
if (num === "5") {
} //FALSE

function trueEquality(a, b) {
  const equalValue = a == b;
  const equalType = typeof a == typeof b;
  return equalValue && equalType;

  //return a==b && typeof a == typeof b ;
}

console.log(trueEquality(5, 5));
console.log(trueEquality("5", 5));

//loop-ul

for (let i = 0; i <= 100; i++){
  console.log("Iteration #" + i);
  isEven(i);

}

for (let i=100; i > 0 ; i--) {
  console.log("Iteration #" + i);
  isEven(i);
}

console.log("end loop");

const numbers = [4, 7, 8, 10, 20, 13, 22,79, 100];

for (let i = 0; i < numbers.length; i++ ) {
   isEven(numbers[i]);
   
}

let j = 0;
while ( j< 100) {
  console.log("Iteration #" + j);
  j++;
}

// windows.prompt
