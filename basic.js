//1. объявление переменных

var oldStyleVar = "Old variable";

let newStyleVar = "New variable";
newStyleVar = "New meaning of variable";

const constantVar = "Constant";
//constantVar = "Attempt to change constant"; //tut oshibka

console.log(oldStyleVar);
console.log(newStyleVar);
console.log(constantVar);

//2. type of data 

//primal type of data 
const stringType = "This is a line"; //line
const numberType = 52; //number 
const booleanType = true; // boolean
const nullType = null; // Null
let underfinedType; //underfined (value not assigned)

const symbolType = Symbol("id"); //symbol 
const bigIntType = 6857463567689980765432455n; //big numbers n=more memory 

//hard type of data 
//massive (sortired collection of elements)

const arrayType = [1, 2, 3, 4, 5,]; // Array
//const arrayType = [1,"two", true, {name: "attach object"}]; // array

//object (not sorted collection of paris "key meaning")
const objectType = {
    name: "Alex",
    age: 30,
    isStudent: false,
    "key with problems": "like this also can be",
};


console.log("===type of data===");
console.log("stringType:", stringType);
console.log("numberType:", numberType);
console.log("booleanType", booleanType);
console.log("nullType;", nullType);
console.log("underfinedType:", underfinedType);
console.log("symbolType:", symbolType);
console.log("bigIntType:", bigIntType);
console.log("arrayType:", arrayType);
console.log("objectType:", objectType);
console.log("access to object:",objectType.name); //Alex
console.log("access to element mass", arrayType[1]); //two

//3.work with array 
const fruits = ["apples","pears","bananas"];
console.log("--------work with array----------")
console.log("og array:", fruits);

//addding emelnt of the end of array 
fruits.push("oranges");
console.log("after push:", fruits);

//deleting last element array
const lastFruit = fruits.pop();
console.log("deleted element:",lastFruit);
console.log("last pop", fruits);


//access to element of index (starting with 0)
console.log("fist element of the array:", fruits[0]);

//lenth of massive 
console.log("lenth of array:", fruits.length);

//maybe operators
const age = 19;
console.log("---operators---");

//if else 
    if (age < 18) {
        console.log("У ТЕБЯ ВОЛОСЫ ПОД НОСОМ НЕ НАЧАЛИ РОСТИ ЧТОБЫ НА ТАКИЕ САЙТЫ ЗАХОДИТЬ");
    } else {
        console.log("oldfag");
    };
    
//if else if else
const score = 12;
if (score >= 90) {
    console.log("ну крут!!!");
} else if (score >=75) {
    console.log("лох");
}  else {
    console.log("пшл ты");
} 







//switch case 
const fruit = "crack";
switch (fruit) {
    case "banana":
    console.log("this banana");
    break;
    case "apple":
    console.log("this apple");
    break;
    default:
    console.log("unknown fruit");
}



//circles

console.log("---circles---");

//circle for (classic)
for (let i = 0; i < 5; i++) {
    console.log("hueta kakojatal:", i);
}



//circle while 
let count = 0;
while (count < 5) {
    console.log("number count:", count);
    count++;
}


//circle do while
let doCount = 5;
do {
    console.log("do while number counter:", doCount)
    doCount++;
} while (doCount < 5); //do one time 

//circle for...of (sorting array)

const colors = ["red","green","yellow"];
for (let color of colors) {
    console.log("Color:", color);
}

//type of sorting array foreach
colors.foEach((color,index) => {
    console.log(`color ${index}: ${color}`);
});


//6. recursion
console.log("---recursion---")

//recursion - function,that summon itself 
//example:factorial calculation 

//5! = 5+4+3+2+1

function factorial(n) {
    if (n === 0) { //basic 
        return 1;
    } else {
        return n * factorial(n - 1); //recursion
    }
}

console.log("factorial 5:", factorial(5));



