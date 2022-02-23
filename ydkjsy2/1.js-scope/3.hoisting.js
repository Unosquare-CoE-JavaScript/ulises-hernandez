/**
 * ---------------------------------------------
 *                 3. Hoisting
 * ---------------------------------------------
 * 
 * Hoisting is a step before excecution where JS Engine
 * "regiters" function and variables' indentifiers at the begining of a 
 * scope, no matter where they were declared in code, and
 * making them available (almost all of them) at the begining 
 * of their enclosing scope.
 */

// Despite greeting() function declaration is after
// this call, code works because the greeting() function
// declaration was hoisted at the begining of this scope
greeting(); // Hello!

function greeting() {
  console.log('Hello!');
}




/**
 * 3.1 Hoisting functions
 * Function hoisting only applies to function declarations
 * (those which are outside of blocks), not to function expressions
 */

// The call of greetingExpression() before the function expresion
// will get a TypeError cause var 'greetingExpression' is 
// hoisted as undefined at the begining of the scope and before
// greetingExpression() function is assined to it.

// Uncomment next lines to get error !
//  greetingExpression(); // <------------ TypeError
//
//  var greetingExpression = function greetingExpression() {
//    console.log('Hello!')
//  }





/**
 * 3.2 Hoisting variables
 * Variable hoisting applies for declarations using keyword var
 * and they're hoisted at the begining of the scope and initialized with undefined
 * value. In the case of using let and const declarations there is hoisting
 * but no initilization so it's not recommended assign values to these
 * variables before their declaration.
 * so you have to do the declaration of these types before or on
 * the assigment of values
 */
 greeting = 'Hello!' ;
 console.log(greeting); // Hello!

 // Despite this var declaration, hoisting sets gretting value 
 // at the begining of this scope as undefined
 var greeting = "Howdy!";


// For let declaration next example would throw an error cause this declaration 
// has to be initialized before its value assigment
//
// Uncomment next lines to get error !
//    letStudentName = 'Suzy' // <------------ ReferenceError
//    console.log(letStudentName);
//    let letStudentName;
//




/**
 * 3.3 Temporal Dead Zone
 * Temporal Dead Zone (TDZ) is the time window where  a variable
 * exits but is stil uninitialized and therefore cannot be accessed.
 * This why let and const declaration cannot be initialized when they're hoisted.
 * var declarations have TDZ but zero in length and unobservable.
 * It is recommended to always put let and const declarations at the top
 * of any scope.
 */
let letStudentName2;
letStudentName2 = 'Suzy'; // This works!
console.log(letStudentName2);





/**
 * 3.4 Re-ordering
 * It is considered that function declaration are hoisted
 * at top of the scope and after them variables are hoisted
 */
studentName = 'Suzy'
greetingStudent(); // Hello Suzy!

function greetingStudent() {
  console.log(`Hello ${studentName}!`);
}

var studentName;


/**
 * This is how hoisting would re-order functions and variables declaration
 * of the previous code example:
 * 
 * 
 *    function greetingStudent() {
 *      console.log(`Hello ${studentName}`);
 *    }
 *    var studentName;
 * 
 *    studentName = 'Suzy';
 *    gretingStudent();
 * 
 * 
 */
