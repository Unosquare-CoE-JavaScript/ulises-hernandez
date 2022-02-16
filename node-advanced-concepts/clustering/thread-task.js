const { parentPort } = require('worker_threads');

(function doWork() {
  let counter  = 0;
  while (counter < 1e9) { 
    counter++;
  }
  parentPort.postMessage(counter);
})()