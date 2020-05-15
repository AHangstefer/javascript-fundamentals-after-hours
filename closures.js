/* Task 1: Counter */

/* Create a function called `factorial` that accepts a 
parameter and uses a counter to return the factorial of 
that number. For example, `summation(4)` should return 
24 because 1*2*3*4 is 24. */

function factorial(num){
 let counter = 1;
  return function(){
   for (num; num>1; num--){
       counter = counter*num -1;
    }
    return counter;
  }
}
const factorialize = factorial(4);

console.log(factorialize());