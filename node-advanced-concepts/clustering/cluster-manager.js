const cluster = require('cluster');
// Cluster creates child instaces of the node server

if (cluster.isMaster) {
  console.log('fork');
  // index.js is excecuted again but in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();

} else {
  const express = require('express');
  const app = express();
  
  function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {}
  }
  
  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });

  app.get('/fast', (req, res) => {
    res.send('This was fast!')
  })
  
  app.listen(3000);
}