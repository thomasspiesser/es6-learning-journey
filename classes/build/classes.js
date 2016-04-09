'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Definition

var Employee = function () {
  // Every class may specify a constructor. The runtime will invoke the
  // constructor when instantiating a class. Use the constructor to initialize
  // state in an object, often by accepting parameters in the constructor method.

  function Employee(name) {
    _classCallCheck(this, Employee);

    this._name = name;
  } // no comma here - not allowed, semi-colon ; would be ok but ignored
  // The following methods will be available on every object/instance we create using
  // new Employee(), (i.e. they are called instance members). This is why, they
  // can save and retrieve state inside the object using the 'this' keyword.


  _createClass(Employee, [{
    key: 'hire',
    value: function hire() {
      this.hired = true;
    }
  }, {
    key: 'getStatus',
    value: function getStatus() {
      if (this.hired) {
        return "hired";
      }
    }
  }, {
    key: 'getName',
    value: function getName() {
      if (!this._name) {
        return 'Anonym';
      }
      return this._name;
    }
  }, {
    key: 'doWork',
    value: function doWork() {
      return 'working';
    }
    // Define properties with get and set to encapsulate the fields - allows to
    // use the property directly

  }, {
    key: 'name',
    get: function get() {
      return this._name.toUpperCase();
    },
    set: function set(newName) {
      if (newName) {
        this._name = newName;
      }
    }
    // A class may contain one or more methods defined with the keyword static.
    // The static keyword will create a method associated with the class, but not
    // with an instance of the class -> no access to 'this' (the instance).
    // A static method is associated with the constructor function and not the
    // prototype object like the instance members.

  }], [{
    key: 'convert',
    value: function convert(input) {
      if (input.name) {
        return new Employee(input.name);
      }
    }
  }]);

  return Employee;
}();

exports.default = Employee;


var developer = new Employee('Thomas');

console.log(developer.getName()); // Thomas

// this works because of the getter
console.log(developer.name); // THOMAS

// this works because of the setter
developer.name = 'Thomasito';
console.log(developer.name); // THOMASITO

// “borrowing” a method from a prototype object:
var result = Employee.prototype.doWork.call();
console.log(result); // working

// static methods are defined on the class not the instance
console.log(Employee.convert); // [Function: convert]
console.log(developer.convert); // undefined

// if I meddle with the prototype, I will change all instances of that class.
// Careful!!!
Employee.prototype.newMethod = function () {
  return 'new method';
};
console.log(developer.newMethod()); // new method

// use static methods as factory methods, conversion methods, or general class
// helper methods
// e.g.
var person = { name: 'Peter' };
var newHire = Employee.convert(person);
console.log(newHire.name); // PETER

// new static method goes in the constructor itself
Employee.println = function (string) {
  console.log(string);
};

console.log(Employee.println('yeah')); // undefined at runtime and 'yeah' at class initianlization - remember its in the constructor, meaning on the class not the instance!
console.log(Employee.println); // Function
//# sourceMappingURL=classes.js.map