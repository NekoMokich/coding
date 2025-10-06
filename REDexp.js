
// Using regular expressions


// Implement examples and complete exercises. Upload to Github.

const funRegex1 = /\b(cat|dog|hamster)\b/g; // classic pet names only
const funStr1 = 'Office log: cat, doge, hamster, hamster again!';
console.log('Example 1:', funStr1.match(funRegex1)); // ['cat', 'hamster', 'hamster']

const funRegex2 = /\bha(ha)*\b/gi; // tidy laugher built from "ha" blocks
const funStr2 = 'Meeting notes: ha haha HAHAHA haaah';
console.log('Example 2:', funStr2.match(funRegex2)); // ['ha', 'haha', 'HAHAHA']

const funRegex3 = /\bCaptain\S+\b/gi; // superhero aliases starting with Captain
const funStr3 = 'Comic con schedule: Captain Keyboard vs Captain Obvious vs captain planet';
console.log('Example 3:', funStr3.match(funRegex3)); // ['Captain Keyboard', 'Captain Obvious']

const funRegex4 = /\b\d{3}\b/g; // strict secret codes
const funStr4 = 'Escape room locks: 007 129 94 300';
console.log('Example 4:', funStr4.match(funRegex4)); // ['007', '129', '300']

const funRegex5 = /\bpizza!{0,2}\b/; // pizza with optional excitement marks
const funStr5 = 'Food poll: pizza! pizza!! pizza!!! bruschetta';
console.log('Example 5:', funStr5.match(funRegex5)); // ['pizza!', 'pizza!!']

const funRegex6 = /#\w+/g; // hashtags for scoreboard (
const funStr6 = 'Hackathon hashtags: #sleepIsForLater #winning #404teamNotFound';
console.log('Example 6:', funStr6.match(funRegex6)); // ['#sleepIsForLater', '#winning', '#404teamNotFound']

const funRegex7 = /\b\w+ify\b/g; // startup words that end with "ify"
const funStr7 = 'Startup pitch: gamify, unicornify, coffee, debugify, stuff';
console.log('Example 7:', funStr7.match(funRegex7)); // ['gamify', 'unicornify', 'debugify']

const funRegex8 = /\b\d{1,2}:\d{2}\b/g; // basic time stamps
const funStr8 = 'Train times: 7:05, 12:30, 24:99, 18:45';
console.log('Example 8:', funStr8.match(funRegex8)); // ['7:05', '12:30', '18:45']

const funRegex9 = /\bone|two|three\b/gi; // counting shout-outs
const funStr9 = 'Countdown remix: one TWO three!!!';
console.log('Example 9:', funStr9.match(funRegex9)); // ['one', 'TWO', 'three']

const funRegex10 = /TODO(?=: )/g; // TODO notes with a neat colon and space
const funStr10 = 'TODO: learn regex, TODOINI: ignore tests, TODO : buy coffee';
console.log('Example 10:', funStr10.match(funRegex10)); // ['TODO']

// Exercises:

// Exercise 1: Design a regex that catches every word ending with "cake" in: "cupcake pancake sneakysnake".

// Exercise 2: Build a regex that finds the emoticon faces ":)", ":(", and ":D" inside: "Mood log: :) :( :P :D".


//Exercise: 1
const ex1Regex = /\b\w*cake\b/g;
const ex1Str = 'cupcake pancake sneakysnake';
console.log(ex1Str.match(ex1Regex)); // ['cupcake', 'pancake']


//Exercise: 2
const ex2Regex = /:\)|:\(|:D/g;
const ex2Str = 'Mood log: :) :( :P :D';
console.log(ex2Str.match(ex2Regex)); // [':)', ':(', ':D']
