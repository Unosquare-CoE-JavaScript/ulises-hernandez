/**
 * --------------------------------------------------------
 *                   3. Promises
 * --------------------------------------------------------
 * 
 * Promise is a JS object that represents the eventual completion or failure
 * of an asynchronous operation and its resulting value. It allows 
 * associate wiah an asychronous action's eventual succes or failure
 * reason. Instead of immediately returning the final value. the asyn-
 * chronous method returns a promise to supply the value at some point
 * in the future. A promise could be in one o these states:
 * 
 *  - pending: initial state
 *  - fullfilled: meaning that the operation was completed successfully
 *  - rejected: menaing that the operation failed
 * 
 */

// Creating promises
// Promise receives a callback function with two parameters:
// the first one is a function that sets the promise as fullfilled when its excecuted and 
// the other one is a function that sets the promise as rejected when its excecuted
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // promise will set as fullfilled
        resolve('completed');
    }, 2000);
});

/**
 * 3.1 Handling promises
 * To get the result of the promise we chain the 'then' method.
 * 'Then' method can receive one or two call back functions as parameter:
 * the first one is the handler when the promise is fullfilled and
 * the other is the handler when the promise is rejected
 * 
 */
myPromise.then(
    response => {
        // Promise was fulfilled
        console.log(response); // completed
    },
    error => {
        // Promise was rejected
        console.log(error);
    }
)


/**
 * 3.2 Chaining promises
 * 'Then' methods also return a promise a it can be chained by a new 'then' method
 * to resolve the returned promise
 */
myPromise.then(response => {
    console.log(response); // completed

    // returns a new promise to be chained
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('another result');
        }, 2000);
    })
})
.then(response => { //chaining the returned promise
    console.log(response) // another result
});


/**
 * 3.3 Catch method
 * Promise also can chain the 'catch' method to handle
 * when a promise is rejected
 */
 myPromise.then(response => {
    console.log(response);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('this is an error');
        }, 2000);
    })
})
.then(response => { 
    console.log(response) 
})
.catch(err => {
    // Promise was rejected
    console.log(err) // this is an error
});


/**
 * 3.4 Finally method
 * Additionally you can chain the 'finally' method to excecute
 * a call back either the promise is fullfilled or rejected
 */
 myPromise.then(response => {
    console.log(response);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('this is an error');
        }, 2000);
    })
})
.then(response => { 
    console.log(response) 
})
.catch(err => {
    console.log(err) // this is an error
})
.finally(() => console.log('Promise completed'));