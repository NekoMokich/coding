// big o notation
//classic meeaning
//Asympotic complexity of the algorithm
//O(n) - linear ,where n is the size of the input

//or - method of describe ,how is time is growing
//execution of the algorithm in relation to the size of the input data


//==========================================================================
//O(1) - constant time
//Time does not depend on the size of the input data
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3, 4, 5])); // 1
const array2 = new Array(1000000).fill("test");
console.log(getFirstElement(array2)); // "test"



//==========================================================================   
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



//==========================================================================
//O(n^2) - quadratic,
//O(log n) - logarithmic