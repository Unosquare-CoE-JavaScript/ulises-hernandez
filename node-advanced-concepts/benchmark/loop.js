// This is a pseudo example of how Node Event Loop works
const penddingTimers = [];
const penddingOSTasks = [];
const penddingOperations = [];


myFile.runContents();

function shouldContinue() {
  // Check one: Any pendding setTimeout, setInterval, setImmediate?
  // Check two: Any pendding OS tasks? 
  // Check three: Any pendding long running operation? (like fs module)
  return penddingTimers.length || penddingOSTasks.length || penddingOperations.length
}

// Entire body excecutes in one 'tick'
while(shouldContinue()) {
  // 1) Node looks at penddingTimers and sees if any functions
  // are ready to be called

  // 2) Node looks at penddingOSTasks and penddingOperations 
  // and call relevant callbacks

  // 3) Pause excecution. Continue when:
  // - a new penddingOSTask is done
  // - a new penddingOperation is done
  // - a timer is about to complete

  // 4) Look at pedding timers. Call any setImmediate.

  // 5) Handle any 'close' events
}


// exit back on terminal