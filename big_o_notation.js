// big o notation
//classic meeaning
//Asympotic complexity of the algorithm
//O(n) - linear ,where n is the size of the input

//or - method of describe ,how is time is growing
//execution of the algorithm in relation to the size of the input data


//|==========================================================================|
//O(1) - constant time
//Time does not depend on the size of the input data
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3, 4, 5])); // 1
const array2 = new Array(1000000).fill("test");
console.log(getFirstElement(array2)); // "test"



//|==========================================================================|   

//O(n) - linear time
//Time grows linearly with the size of the input data
//if 'n' is doubled ,time is doubled
console.log("---0(n) linear time---");

//example 1 - find a sum of all elements in an array
//for find sum of all elements in an array,we need to look at every element in array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //arr.length = this is n
        sum += arr[i]; //circle done n times
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
const array1 = new Array(1000000).fill(1);
console.log(sumArray(array1)); // 1000000

//|==========================================================================|

// //O(n^2) - quadratic time,
//time grows quadratically with the size of the input data
//if 'n' is doubled ,time is quadrupled
console.log("---O(n^2) quadratic time---");
//example 1 - find duplicate elements in an array
function hasDuplicates(arr) {
   const n = arr.length;
   for (let i = 0; i < n; i++) { //internal circle done n times
       for (let j = i + 1; j < n; j++) { //circle done n times
           if (i !== j && arr[i] === arr[j]) {
               return true;//if we find duplicate - return true
           }
       }
   }            
    return false; //if we don't find duplicate - return false
}
console.log(hasDuplicates([1, 2, 3, 4, 5])); // false
console.log(hasDuplicates([1, 2, 3, 4, 5, 3])); // true

//|==========================================================================|
//O(log n) - logarithmic
//Time grows logarithmically with the size of the input data
//if 'n' is doubled ,time increases by 1
console.log("---O(log n) logarithmic time---");

//Binary search works only on sorted arrays
//binary search - divide and conquer algorithm
//he divides the search interval in half
//and can find and needed element,then repeat the process for this half

function binarySearch(arr, target) {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArray[mid] === target) {
            return mid; //element found
        }
        if (sortedArray[mid] < target) {
                left = mid + 1; //Needed element in right side
        } else {
            right = mid - 1; //meeded element in left side
        }

    }
    return -1; //element not found
} //amount of interaction is gonna be logarithmic from size of array


const sortedNumbers = [2, 5, 8, 12, 16, 23, 56, 72, 88, 110];
console.log(binarySearch(sortedNumbers, 23));
console.log(binarySearch(sortedNumbers, 99));

//|==========================================================================|
//Linearothmic Time 
//Time of doing is growing same as n Log n with size of input data
//Golden middle between 0(n) and 0(n^2)
//Most effective algorithims of sorting is got same difficulty
console.log("---O(n log n ) Linearothmic difficulty---")

//example. Sorting arrey
//using build in method sort, that is build in in most Js engines
function sortArray(arr) {
    //we here do not write own algorithm of sorting
    //we using build in
    return arr.slice().sort((a, b) => a - b);
}

const unsortedArray = [5, 3, 8, 1, 2, 7];
console.log("Sorting Array" , sortArray(unsortedArray));

//|==========================================================================|
//Exponetial time 0(2^n)
//time is done  in double with every added element in input data

console.log("---O(2^n) Exponetial time---")

//example - recursion is done by Fibonacci number

function fibonacci(n) {
    if (n <= 1) {
            return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); //double use of recursion call
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(40)); // 40

//|==========================================================================|
//Factorial Time 0(n!)
//Time of working is growing depends with growing of input data
//not effective for most of n

console.log("---0(n!) Factorial Time---")

//example - generating every array restructions

function findPermutations(arr) {
    if (arr.length === 0){
        return;
    }
    for (let i = 0; i < arr.length; i++) {
            const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        findPermutations(rest);
    }
}