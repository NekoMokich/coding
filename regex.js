/**
 * Regular
 * Regular expression or RegExp
 * 
 * RegExp - this is a sequence of characters,
 * which defines the search patterns.
 * 
 * What are they used for?
 * 
 * 1.checking whether a string matches a pattern
 * (for example email validation)
 * 2.Search for a substring to a string.
 * 3.Substitutions or found substrings.
 * 4.Extracting information from a string.
 * 
 * Basic syntax
 * 
 * In 35, a regular expression is created in two ways
 * 1.   Literal: const regex = /template/flag
 * This method is used most often.
 * 
 * 2.   Using the constructor: const regex = new RegExp("template", "flag")
 * 
 * Flags
 * i (ignore case) - ignore registry
 * g (global) - global search. That's to find a relationship but its structure
 * m (multiline) - multiple rezim
 * u (unicode) - heals the unicode icon
 * s (dotAll) - allows the symbol "." to match these and the symbols of the new arrow.
 * 
 * Example:
 */


//1. Find word "hello" in code
const regex1 = /hello/;
const str1 = "hello world";
console.log("Example 1: ", regex1.test(str1));

//2. flag i - ignore registry
const regex2 = /hello/i;
const str2 = "Hellow World";
console.log("Example 2: ", regex2.test(str2));

//3. Using flag g - global search
const regex3 = /l/g;
const str3 = "hello World";
console.log('Example 3: ', str3.match(regex3));

//4. Search for symbols
const regex4 = /[aeiou]/g;
const str4 = "Hello World";
console.log("Example 4: ", str4.match(regex4));

//5. Character range
const regex5 = /[a-f]/g;
const str5 = "abcde fghij";
console.log("Example 5: ", str5.match(regex5));

//6. Metasymbol /d (digit)
const regex6 = /\d/g;
const str6 = "My phone number is 123-456-789";
console.log("Example 6: ", str6.match(regex6));

//7. Metasymbol \w (word character)
//Any Latin letter, number, or underscore character "_"
//this is equivalent to the pattern [a-zA-Z0-9_]
const regex7 = /\w/g;
const str7 = "user_id_123";
console.log("Example 7: ", str7.match(regex7));

//8. Metasymbol /s (space character)
//Will find any space, tab, line break
const regex8 = /\s/g;
const str8 = "hello\tworld\nnew line";
console.log("Example 8: ", str8.match(regex8));

//9. Inverted metasymbol \D \W \S
const regex9 = /\D/g;
const str9 = "ID 12345";
console.log("Example 9: ", str9.match(regex9));

//  Quantifier communicators (without the number or repetitions)
//join the synerl or the group that groans in front of them.

//Quantifier * - zero or more repetitions
const regex10 = /go*/g;
const str10 = "g go goo goooo";
console.log("Example 10: ", str10.match(regex10));

//Quantifier ? 
const regex11 = /colou?r/;
console.log("Example 11: ", regex11.test("color"));
console.log("Example 11: ", regex11.test("colour"));

//12. Quantifier {n}
//{n} - number of repetitions
///\d{3}g - searches for exactly 3 digits in a row
const regex12 = /\d{3}/g;
const str12 = "123 45 6789 123";
console.log("Example 12: ", str12.match(regex12));

//13. Quantifier {n,}
//{n,} - n or more repetitions
const regex13 = /\d{3}/g;
const str13 = "1 12 123 1234";
console.log("Example 13: ", str13.match(regex13));

//14. Quantifier {n,m}
//{n,m} - from n to m
const regex14 = /\d{2,3}/g;
const str14 = "1 12 123 1234";
console.log("Example 14: ", str14.match(regex14));

//  Borders and anchors

//15. Border ^
//^ - start of line. This template should be at the beginning.
const regex15 = /^Hello/;
const str15 = "Hello World!";
console.log("Example 15: ", regex15.test(str15));

//16. Anchor $
//$ - end of line. This template should be at the ending.
const regex16 = /World!$/;
const str16 = "Hello World!";
console.log("Example 16: ", regex16.test(str16));

//Grouping and alternatives

//17. Grouping ()
// () - Groups several characters into a single whole.
// Quantifiers can be used.
const regex17 = /(ha)/g;
const str17 = "hahaha ha hah";
console.log("Example 17: ", regex17.test(str17));

// 18. Alternatives | (or)
//works as a disjunction
const regex18 = /cat|dog/g;
const str18 = "I like cats and dogs";
console.log("Example 18: ", str18.match(regex18));

// 19. Capture group with match()
const regex19 = /(\w+)@(\w+\.\w+)/;
const str19 = "test@example.com";
const match19 = str19.match(regex19);

console.log("Example 19 (full match): ", match19[0]);
console.log("Example 19 (group 1): ", match19[1]);
console.log("Example 19 (group 2): ", match19[2]);

//20. Method with replace() with regular equation
const regex20 = /-| /g;
const str20 = "2025-10-01 12:00";
console.log("example 20", str20.replace(regex20, ":"));

//21. sspliting the line with massive sublines
//method Split()

const regex21 = /\d/g;
const str21 = "item1item2item3";
console.log("example 21", str21.split(regex21));

//Exercise: 1
//fidn all js word in lines ,regardless of registry 
const exStr1 = "I love JS. js is awesome. Js is powerful";
const exRegex1 = /js/gi;
console.log("Exercise 1", exStr1.match(exRegex1));

//Exercise 2
//check if phone number is valid 
//valid format is xxx-xxx-xxxx
const exStr2_1 = "123-456-7890";
const exStr2_2 = "123-456-789";
const exRegex2 = /^\d{3}-\d{3}-\d{4}$/;
console.log("Exercise 2 Valid", exRegex2.test(exStr2_1));
console.log("Exercise 2 invalid", exRegex2.test(exStr2_2));


//Exercise 3
//remove not needed spaces 
const exStr3 = "Hello               world,         this     is  a   test.";
console.log("Exercise 3 ", exStr3.replace(/\s+/g," "));



//Exercise 4 Validation of password 
//password must be at least 8 sybmols,must Have one letter in lowercase and Uppercase

const pass1 = 'aB123456';
const pass2 = 'ab123456';
const exRegex4 = /^(?=.*[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
//^ - start of line 
//(?=.*[a-z]) - looking forward  - where is lowercase letter in line
//(?=.*[A-Z]) - looking forward  - where is Uppercase letter in line
//(?=.*\d) - searching for number
//{8,} - line dont have at least 8 symbols 
//$ - end of the line 
console.log("Password is valid", exRegex4.test(pass1));
console.log("Password is invalid", exRegex4.test(pass2));
