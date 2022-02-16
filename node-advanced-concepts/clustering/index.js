// Node is sigle thread
const express = require('express');
const app = express();

function doWork(duration) {
  const start = Date.now();
  while(Date.now() - start < duration) {}
}

// All request would be queued 
app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hi there');
});

app.listen(3000);


/**                                                                                 
 *                                                Single Thread                                                     
 *                                     +-----------------------------------+                                    
 *                                     |   +-----------------------------+ |                +------------------+
 *           +-------------+           |   |                             | |                |                  |
 *           |             |           |   |         Node Server         | |                |     Response     |
 *           |   Request   |---------->|   |                             | |--------------->|                  |
 *           |             |           |   |                             | |                |                  |
 *           +-------------+           |   +-----------------------------+ |                +------------------+
 *                                     +-----------------------------------+                    
 * 
 */