// function definition
function sayHello() {
    console.log("Hello from sayHello function");
}

//function invocation
sayHello();
sayHello();

// this contains the function code
// this does not do abything!
// sayHello;
// console.log(sayHello);

//function definition!
function sum(x, y) {
    const result = x + y;
    console.log("The result is: " + result);
}

sum(2, 3);
sum(10, 50);
sum(3, -3);
sum(0, -1);
sum();
sum(5);

const result = sum(1, 1);
console.log("1+1 is: " + result);

function multiply(x, y) {
    const result = x * y;
    //console.log("Result is: " + result);
    return result;
}

const res1 = multiply(9, 8);
console.log ("res1 equals: " + res1);

multiply(11, 12);

const res2 = multiply(2, 2);
console.log(res2);
const res3 = multiply(3, 3);
console.log(res3);
const res4 = multiply(res2, res3);

console.log("res4 is: " + res4);


function opposite(x){
    return 0 - x;
    console.log("This will never make it!");
}

const opus = opposite(11);
console.log(opus); 

// sau

console.log(opposite(11));

