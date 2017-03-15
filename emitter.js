// an event emitter
function Emitter() {
  // observer list
  this.events = {};
  // looks like:
  // {
  //  greet: [function, function, function]
  // }
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

// app
var emtr = new Emitter();

// observers
emtr.on('greet', function() {
   console.log('Welcome!');
 });

 emtr.on('greet', function() {
   console.log('Greetings!');
 });

 emtr.emit('greet'); 
// Welcome!
// Greetings!
