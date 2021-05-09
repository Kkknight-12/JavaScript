// const R = require('ramda');
// import Rx from 'rxjs';
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// var Rx = require('rxjs');
import * as Rx from 'rxjs';

/* 
RxJs is free standing library for managing async data flows that uses 
the observer design pattern to help you keep track of your data

Observer Design Pattern - > you create object that does things,
that object can have list of observers( like social media followers ).
If observer object performs an action or changes state in any way, it can
give its follower an update and they are notified that a change happened.
This pattern can be very help full when working with asyn logic.

Rxjs combines observer pattern, functional programming concepts,
and the iterator pattern to create a smooth and fast data management system.
Its is good option to use if you are working with websockets or streams of live 
information.

Most used feature of Rxjs is Observables
*/

// saved insatance of the RxJs.Observable in variable observable.
// Observable are like functions except that function happen once and
// then returns, an observable will be over a period of time and can return a stream
// of information 

const observable = new Rx.Observable( subscriber => {
    subscriber.next(1);
    subscriber.next(2); // "return" another value
    subscriber.next(3); // "return" another value
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');

// we are using subscribe on observable to run the above logic
// observable can have three method
// ie-> next, error, complete
// error and complete can happen only once
// next work like a return of a function, except that because
// observable happen over time, next can happend multiple times
observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error( 'something wrong occurred: ' + err ); },
    complete() { console.log('done'); }
});

console.log('just after subscribe');

// "Next" notifications are the most important and most common type: they represent actual data being delivered to a subscriber. 
// "Error" and "Complete" notifications may happen only once during the Observable Execution, and there can only be either one of them.