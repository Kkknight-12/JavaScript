// const R = require('ramda');
var Rx = require('rxjs');

const observable = new Rx.Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2); // "return" another value
  subscriber.next(3); // "return" another value
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');

observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});

console.log('just after subscribe');