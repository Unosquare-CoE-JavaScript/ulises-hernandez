/**
 * --------------------------------------------------------
 *                      1.Callbacks
 * --------------------------------------------------------
 * 
 * Callback is a function passed into another function as an argument,
 * which then is invoked inside the another function to complete some
 * action.
 * Callbacks are usually used to handle async operations after they're
 * either completed or rejected, these types are called asychronous callbacks.
 */


function gretting(name) {
    console.log(`Hello ${name}`);
}

// Sychronous callback
function processSyncUserName(callback) {
    let name = 'Ulises';
    // Excecutes callback after get the user name
    callback(name);
}

processSyncUserName(gretting); // Hello Ulises

// Asynchronous callback
function processAsyncUserName(callback) {
    let name = 'Ulises';ß
    setTimeout(function () {
        // Excecutes callback some time (5 seconds in this case) after get the user name
        callback(name);
    }, 5000)
}

processAsyncUserName(gretting); // Hello Ulises

