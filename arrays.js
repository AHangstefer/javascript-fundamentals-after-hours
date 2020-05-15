const characters = require('./characters');

/*
    Task 1 use .forEach()
    charactersNameHeight will be an array of strings, and each
     string should follow this pattern: "Name: Luke Skywalker
      Height: 172cm."
*/


const charactersNameHeight = []
characters.forEach(character=>`Name: ${character.name}, Height: ${charcter.height}.`) )
console.log(charactersNameHeight);

/*
    Task 2 use .map()
    Using map, create a new array of strings named 
    allCapsNames, each string following this pattern:
     "LUKE SKYWALKER"
*/

const allCapsNames = characters.map(character => character.name.toUpperCase())
console.log(allCapsNames);

//implied return after the arrow********
//exactly like return character.name.toUpperCase(); 

/*
    Task 3 use .filter()
    Using filter, create a new array of objects called 
    shortCharacters which contains only characters with 
    under 100cm tall.
*/

const shortCharacters = characters.filter(character =>{
} if character.height <100){
  return character
}
console.log(shortCharacters);

//const shortCharacters = [];

//character.height <100
//return character 




/*
    Task 4 use .reduce()
    Using reduce, find the average number of films the
     characters have been in.
*/

//const averageFilms = 0;
const averageFilms = character.reduce({totalFilms, character} =>{
return totalFilms + character.films.length;

},0) / character.length;

console.log(averageFilms);
//reduce is always looking for the new value 



// ==== Callbacks ====  

/* task 1: Create a higher-order function
  * Create a higher-order function named funWithStrings with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function functionWithStrings(a, b, cb){
return cb(a, b);
}

/* task 2: Create several functions to callback with funWithStrings();
  * Create a function named concat that returns a single string formed from two strings.
  * Create a function named mixedCase that makes one string all caps and one string all lower case and then concatenates the 2 strings.
*/
function concat( string1, string2){
  return string1 + string2;
}

function mixedCase(string1, string2){
  return string1.toLowerCase() + string2.toUpperCase;

   
/* Step 3: Check your work by un-commenting the following calls to funWithStrings(): */
// console.log(funWithStrings('Hello, ', 'there.', concat)); // Hello, there.
// console.log(funWithStrings('I\'m mellow.', ' I\'m crazy excited!!!', mixedCase)); // i'm mellow. I'M CRAZY EXCITED!!!