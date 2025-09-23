//basic ways to connecting functions

console.log("---Functions---");

//1. function declaration
//can call before declaration
//because it upper hoisting in start of area of visibility

console.log(sum(5, 3));

function sum(a, b) {
    return a + b;
}

console.log("---Function Expression---");
//2. function expression
//can call only after declaration
//function created,when its taking a reading the code

const sumExpression = function (a, b) {
    return a + b;
};

console.log(sumExpression(9, 15));


console.log("---Arrow Function---");    
//3. arrow function
//can call only after declaration
//main oddituy - no  own context of "this"

const sumArrow = (a, b) => {
    return a + b;
};
console.log(sumArrow(7, 8));

//shorter version of arrow function
const multiply = (a, b) => a * b;

console.log(sumArrow(6, 7));
console.log(multiply(6,7));

///Variant with "This"
const person = {
    name: "Oleg",
    greetRegular: function() {
        //"this" - here is obeject person
       console.log(`Hello From ${this.name} (regular)`);
        
    },
    greetArrow:() => {
        // this arrow doesnt have personal "this"(context)
        console.log(`Hello from ${this.name} arrow`);
    }

}
person.greetRegular();
person.greetArrow();

// parameters function

console.log("---Parameters fuction---");

//defaults parameters 
function greet(name = "somebody"){
    console.log(`welcome ${name}!`);
}
greet("Anna");
greet();


//REST-params
//collect every given arguments (parameters) in massive
function sumAll (...numbers) {
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}
console.log("Summa 1,2,3,4", sumAll(1,2,3,4));

//call-back function
//this function ,given in another fuction 
//in term of the argument 

//classic way of using call-back

setTimeout(() => {
    console.log("this message apppear every 2 seconds");
}, 2000);

function operate (a, b, operationCallback) {
    return operationCallback(a,b);
}
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
console.log("Call with callback add:", operate(10,5, add));
console.log("Call with callback su:", operate(10,5, subtract));


console.log("---Closure---")
//Closure - combination of functions and their Environment
//easier - inside function "remember" variables
//outside function even after , how outside function is over their work

function createCounter() {
    let count = 0; //this variables in lexical Environment

    //inside function,that will be returned
    return function(){
        count++;
        console.log(count);
        return count;
    };
}
const counter1 = createCounter();
counter1();
counter1();//remeber previous variable

const counter2 =  createCounter();
counter2();

console.log("---self-calling function");
//IIFE - Immediately Invoked Function Expression;

(function() {
    const SecretMessage = "This is  a message is not available globally";
    console.log(SecretMessage);
})();