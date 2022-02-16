// Worker threads module used in node versions 10+
const express = require('express');
const { Worker } = require('worker_threads');
const app = express();


app.get('/', (req, res) => {
  const worker = new Worker('./thread-task.js');

  worker.on('message', function(myCounter) {
    console.log(myCounter);
    res.send('' + myCounter);
  });
  
});

app.get('/fast', (req, res) => {
  res.send('This was fast!')
})

app.listen(3000);