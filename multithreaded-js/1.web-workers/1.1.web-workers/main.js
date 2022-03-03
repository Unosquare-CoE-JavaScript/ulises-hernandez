/**
 * 1.1 Web Workers
 * 
 * Web workers allow you to spawn a new environment for executing
 * JS in. JS that is excecuted in this way is allowed to run in a
 * separate thread from the JS that spawned it.
 * Communication occurs between these two environments by using a
 * pattern called message passing.
 */

console.log('hello from main.js');

const worker = new Worker('worker.js'); // Instatiation of a new dedicated worker

worker.onmessage = (msg) => { // A message handler is attached to the worker
  console.log('message received from worker', msg.data);
};

worker.postMessage('message sent to worker'); // A message is passed into the worker

console.log('hello from end of main.js');
