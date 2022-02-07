/**
 * ------------------------------------------
 *      Analyzing variables and scopes
 * ------------------------------------------
 * The three actors who participate in creating variables definition
 * and their respective scopes are the Compiler, the Scope Manager and 
 * the Engine.
 * This process follows two steps. In the first one compiler will ask
 * Scope Manager if variables exits in the scope where they're called,
 * if thy don't Scope Manager creates respective scopes for that variables.
 * In the second step Engine will read the created variables and ask Scope
 * Manager about their respectives scopes in excecution time.
 * 
 * 
 * 1. Step 1
 * 
 */

// Global scope

// 1.1 Compiler finds the 'students' variable declaration and
// Scope manager (of global scope) creates this variable in its scope
var students = [
  { id: 1, name: 'Kyle' },
  { id: 2, name: 'Suzy' }
];


// 1.2 Compiler also ask for the getStudentName function declaration and
// Scope manager creates it and the new function scope
function getStudentName(studentId) {
  // Function inner scope
  // 1.3 Compiler finds the 'studentId' variable declaration and
  // Scope manager (of 'getStudentName' function scope) creates this variable in its scope


  // 1.4 Compiler finds the the for loop declaration
  // Scope manager  creates this declaration and its scope
  // and so on and so on.......
  for (let student of students) {
    // Loop inner scope

    if (student.id == studentId) {
      return student.name;
    }
  }
}



/**
 * 
 * Step 2
 * 
 */
// 2.1 Engine ask to Scope Manager (of Global Scope) to 
// look up the indentifier for 'getStudentName' function and
// Scope Manager responds with the stored variable

// 2.2 Engine ask for the reference for the 'students' variable in this scope and
// Scope manager initialize this variable to undefined in this scope
var students = [
  { id: 1, name: 'Kyle' },
  { id: 2, name: 'Suzy' }
];


// 2.3 Engine ask for the reference for the 'students' reference in this scope and
// Scope manager responds with the function references.
// Both excecute the function and create its scope.
function getStudentName(studentId) {

  for (let student of students) {
    // Loop inner scope

    if (student.id == studentId) {
      return student.name;
    }
  }
}


/**
 * 
 * Step 2.a
 * Nested scope
 * 
 * Next steps ocurrs when one variable reference belogns to an outer scope.
 * In this case source 'students' in the 'getStudentName' function scope and belogs to global scope
 */


// 2.a.2 Engine ask to Scope Manager (of global scope)              
// for the reference of students variable. Scope Manager responds 
// with variable reference
var students = [
  { id: 1, name: 'Kyle' },
  { id: 2, name: 'Suzy' }
];


function getStudentName(studentId) {

  //                                                                           .   
  // 2.a.1 Engine ask to Scope Manager (of function scope)                    /|\
  // for the reference of students variable. Function scope                    | 
  // doesn't have any reference to it so engine tries  in                      |
  // the outer scope above                                   -------------------    
  for (let student of students) {

    if (student.id == studentId) {
      return student.name;
    }
  }
}