// Array of world countries
// Массив стран мира
const countries = [
  "Estonia", "Colombia", "China", "India", "Brazil", "Canada", "Australia", "Argentina", "Mexico", "France",
  "Germany", "Italy", "Spain", "United Kingdom", "Japan", "South Korea", "Indonesia", "Russia",
  "Egypt", "South Africa", "Saudi Arabia", "Turkey", "Iran", "Pakistan", "Bangladesh", "Vietnam",
  "Thailand", "Philippines", "Malaysia", "USA", "Peru", "Chile", "Venezuela", "Ecuador", "Cuba",
  "Belarus", "Ukraine", "Poland", "Czech Republic", "Sweden", "Norway", "Finland", "Denmark", "Greece",
  "Portugal", "Switzerland", "Austria", "Hungary", "Romania", "Bulgaria", "Serbia", "Croatia",
  "New Zealand", "United Arab Emirates"
];

//Sort alphabetically
const sortedAlphabetically = [...countries].sort((a ,b) => a.localeCompare(b));
console.log("1. Sorted Alphabetically:", sortedAlphabetically);

//reverse sort

const sortedReverseAlphabetically = [...countries].sort((a ,b) => b.localeCompare(a));
console.log("2. Sorted Alphabetically:", sortedReverseAlphabetically);

//3. sort by length of country name (shortest to longest)
const sortedByLenght = [...countries].sort((a ,b) => a.length - b.length);
console.log("3. Sorted Size:", sortedByLenght);

//4. sort by length of country name (longest to shortest)
const sorteResversByLenght = [...countries].sort((a ,b) => b.length - a.length);
console.log("3. Sorted Size:", sorteResversByLenght);

//5. sort by of vowerls in country name 
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(letter => vowels.includes(letter)).length;
};
const sortedByVowelCount =[...countries].sort((a ,b) => countVowels(a)- countVowels(b));
console.log("5.Sorted by amouts of vowels:", sortedByVowelCount)


//6.Random Sorting 
const randomSort = [...countries].sort(() => Math.random() - 0.5);
console.log("6. Random sorted:", randomSort)

// Classic sorting algorithms

//1. Bubble Sort
//  Idea: iterate through the array repeatedly, comparing adjacent elements,
//  and swapping them if they are in the wrong order.
//  Very slow for large arrays.

const bubbleSort = (arr) => {
    const newArr = [...arr];
    const n = newArr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (newArr[j].localeCompare(newArr[j + 1]) > 0) {
                //
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
            }
        }
    }
    return newArr;
}
console.log("Bubble sorted:", bubbleSort(countries));

//2. Selection Sort
//  Idea: find the smallest (or largest) element in an array
//  and place it at the beginning (or end) of the sorted part of array.
//  O(n^2) - quadratic complexity
//  Also slow for large arrays.

//3. Insertion Sort
//  Idea: build a sorted array one element at a time,
//  inserting each new element in it's correct place.
//  O(n^2) - quadratic complexity
//  Efficient for small arrays or nearly sorted data.

//4. Bogo Sort (Joke Sort)
//  Idea: randomly shuffle the array until it is sorted.
//  O((n+1)1) - factorial complexity
//  A very inefficient and unrealistic algorithm, used for educational purposes only.