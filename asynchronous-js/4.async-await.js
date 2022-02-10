/**
 * --------------------------------------------------------
 *                   4. Async Await
 * --------------------------------------------------------
 * 
 * The async and await keywords allows asynchronous behavior in
 * synchronous function, avoiding and simplifying the use of promises.
 *  
 * 
 */

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  const result = await resolveAfter2Seconds(); // waits until the promise gets completed
  console.log(result); // resolveing
}

asyncCall();


/**
 * 4.1 Async
 * Async keyword allows promise behavior in synchrnous function.
 */

// async key word is used in function definitions and function expressions
async function plainFunction() {
  console.log('start function');
  return 'done';
}

// The async function return a promise and 
// can be chained by the 'then' method
plainFunction()
.then(response => console.log(response)); // done


/**
 * 4.2 Await
 * Await keyword can only be used inside an async function.
 * It waits for a promise and it causes the async function
 * pauses. With await we can also get directly the value of
 * the promise
 * 
 */

async function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise fullfilled');
      resolve('completed');
    }, 2000);
  });
}

async function asyncFunction() {
  let p = await promiseFunction(); // waits for the promise until it resolves and gets the resolved value
  console.log('this will wait until the promise resolves');
  console.log(p); // completed
}

asyncFunction();