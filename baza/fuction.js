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
