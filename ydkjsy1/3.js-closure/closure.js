/**
 * --------------------------------------------------
 *                     Closure
 * --------------------------------------------------
 * 
 * Closure is when a function remembers and continue 
 * to access variables from outside its scope, even 
 * when the function is excecuted in a different scope.
 * 
 * It is part of the nature of functions. Objects don't
 * get closures. It just happend when a function excecutes
 * in a different scope than it was originally defined.
 */

function greeting(msg) {
  //This scope belongs to gretting() function
  return function who(name) {
    // This scope belongs to who() function
    // We can access 'msg' variable from the scope above of greeting() function
    console.log(`${msg}, ${name}`);
  }
}


var hello = greeting('Hello');
var howdy = greeting('Howdy');

hello('Kyle'); // Hello variable preserves greeting msg variable's value: 'Hello'
howdy('Grant'); // Hello variable preserves greeting msg variable's value: 'Howdy'





/**
 * Practice with closures
 * 
 * The range(..) function takes a number as its first argument, 
 * representing the first number in a desired range of numbers.
 * The second argument is also a number representing the end of 
 * the desired range (inclusive). If the second argument is omit-
 * ted, then another function should be returned that expectsthat argument.
 */

function range(start, end) {
  function getCalculatedRange(endRange) {
    let calculatedRange = []
    // Access to 'start' property from the scope above
    for (let i = start; i <= endRange; i++) {
      calculatedRange.push(i);
    };

    return calculatedRange; 
  }

  // If the end of the range is defined return the result of getCalculatedRange function
  return end != undefined ? getCalculatedRange(end) : getCalculatedRange;
}

console.log(range(3,3)); // [3]
console.log(range(3,8)); // [3,4,5,6,7,8]
console.log(range(3,0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]

