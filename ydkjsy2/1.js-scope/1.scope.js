/**
 * -------------------------------------------
 *                  Scope
 * -------------------------------------------
 * 
 * Scope is determined at compile time and is the context where a variables and 
 * functions can be visible, accessed and referenced. It is also layered in 
 * hierarchy, inner/child scopes can access to outer/parent scopes, but no vice 
 * versa.
 * 
 */

// Global scope
var students = [
  { id: 1, name: 'Kyle' },
  { id: 2, name: 'Suzy' }
];

// Global scope can't access to inner's scopes properties like
// studentId (parameter of getStudentName() function) or
// let student (from the loop scope)
// This case throws an error cause this varibles are not declared
// in the global scope

// console.log(studentId); // studentId is not define
// console.log(student); // student is not define 

function getStudentName(studentId) {
  // Function inner scope

  // However inner scopes have access to properties from outer scopes.
  // In this case the loop scope has access to the 'studentId'
  // parameter from the 'getStudentName' function scope and
  // the 'students' variable from the global scope
  for (let student of students) {
    // Loop inner scope

    if (student.id == studentId) {
      return student.name;
    }
  }
}

getStudentName(1);