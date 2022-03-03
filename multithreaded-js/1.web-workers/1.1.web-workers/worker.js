/**
 * Dedicated Worker
 */

console.log('hello from worker.js');

// This onmessage function is called when the worker.postMessage() is called from outside the dedicated worker
// Declaring this function using let, const or function won't work. 
self.onmessage = (msg) => { 
  console.log('message from main', msg.data);

  postMessage('message sent from worker');
};
