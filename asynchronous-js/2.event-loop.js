/**
 * --------------------------------------------------------
 *                   2. Event Loop
 * --------------------------------------------------------
 * 
 * Asynchronicity in JS is posible thanks to the Event Loop.
 * In JS all sychronous operations are stored in the call stack
 * and removed after they're excecuted. Asynchronous operations
 * are queued in the message queue and wait to be excecuted by their
 * associated function. The event loop is reposible for checking
 * wheter the call stack is empty or not. If the call stack is empty
 * it pushes the first item of the message queue into the call stack
 * for execution.
 * 
 */

// 1. when foo() is excecuted it's pushed to call stack
function foo() {
  // 2. this console.log statement is pushed on top the previous frame (foo()),
  // excecuted and finally popped of the call stack
  console.log('One');

  // 3. setTimeout is pushed to the stack,
  // excecuted and finally popped of the call stack
  setTimeout(function () {
    // 4. when the timer is completed, this callback function is pushed to the message queue
    console.log('Two')
  }, 2000);

  // 5. this console.log statement is pushed to the stack,
  // excecuted and finally popped of the call stack
  console.log('Three')
}
foo();
// 6. Function foo() call is popped off the call stack.
// The Event Loop checks at the call stack and sees that it's empty
// so it pushes the setTimeout callback function onto the call stack for excecution

// 7. the callback is completed and popped off the call stack
