'use strict';

//ES5
//object literal:
var human = {
  breathe: function breathe() {
    return 'breathing…';
  }
};

// "inheritance" aka. set the prototype of worker to human-object using the
// Object.create function. This chains the worker object to the human object
// through the prototype link. If we call a function on worker that cannot
// be found, js will look through the prototype chain to see if it can
// find the function further up the chain. In this case, it will find .breathe()
// not in the worker object but up the prototype chain in the human object.
var worker = Object.create(human);

// add some properties to the worker object - cannot use object literals, because
// the object already exists
worker.work = function () {
  return 'working…';
};
worker.company = 'best company in the world';

console.log(worker.breathe()); // returns 'breathing…

// ES6
// Object.setPrototypeOf makes it possible to use object literals for both objects
// might have performance issues - maybe keep using .create method

var es6human = {
  breathe: function breathe() {
    return 'breathing…';
  }
};

var es6worker = {
  work: function work() {
    return 'working…';
  },

  company: 'best company in the world'
};

Object.setPrototypeOf(es6worker, es6human);

console.log(es6worker.breathe()); // returns 'breathing…'

// now to assign instance specific behavior that we want available on multiple
// prototypes, we just create an object, instead of using classes and copy it onto
// another object or prototype using Object.assing

var canEat = {
  food: 'nothing',
  eat: function eat() {
    return 'eats ' + this.food; // template string (part of ES6)
  }
};

// assign copies the values. much like extend.
es6worker = Object.assign(es6worker, canEat);

var worker1 = Object.create(es6worker);
var worker2 = Object.create(es6worker);
worker2.food = 'apple';

console.log(worker1.eat()); // 'eats nothing'
console.log(worker2.eat()); // 'eats apple'
//# sourceMappingURL=objectBased.js.map