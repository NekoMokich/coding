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


