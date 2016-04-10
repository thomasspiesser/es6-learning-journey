// Definition

export default class Employee {
  // Every class may specify a constructor. The runtime will invoke the
  // constructor when instantiating a class. Use the constructor to initialize
  // state in an object, often by accepting parameters in the constructor method.
  constructor(name) {
    this._name = name;
  } // no comma here - not allowed, semi-colon ; would be ok but ignored
  // The following methods will be available on every object/instance we create using
  // new Employee(), (i.e. they are called instance members). This is why, they
  // can save and retrieve state inside the object using the 'this' keyword.
  hire() {
    this.hired = true;
  }
  getStatus() {
    if (this.hired) {
      return "hired";
    }
  }
  getName() {
    if (!this._name) {
      return 'Anonym';
    }
    return this._name;
  }
  doWork() {
    return 'working';
  }
  // Define properties with get and set to encapsulate the fields - allows to 
  // use the property directly
  get name() {
    return this._name.toUpperCase();
  }
  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
  // A class may contain one or more methods defined with the keyword static.
  // The static keyword will create a method associated with the class, but not
  // with an instance of the class -> no access to 'this' (the instance).
  // A static method is associated with the constructor function and not the
  // prototype object like the instance members.
  static convert(input) {
    if(input.name) {
      return new Employee(input.name);
    }
  }
}

const developer = new Employee( 'Thomas' );

console.log( developer.getName() ); // Thomas

// this works because of the getter
console.log( developer.name ); // THOMAS

// this works because of the setter
developer.name = 'Thomasito';
console.log( developer.name ); // THOMASITO

// “borrowing” a method from a prototype object:
const result = Employee.prototype.doWork.call();
console.log( result ); // working

// static methods are defined on the class not the instance
console.log( Employee.convert ); // [Function: convert]
console.log( developer.convert ); // undefined

// if I meddle with the prototype, I will change all instances of that class.
// Careful!!!
Employee.prototype.newMethod = function () {
  return 'new method';
}
console.log( developer.newMethod() ); // new method

// use static methods as factory methods, conversion methods, or general class
// helper methods
// e.g.
const person = {name: 'Peter'};
const newHire = Employee.convert(person);
console.log( newHire.name ); // PETER

// new static method goes in the constructor itself
Employee.println = function (string) {
  console.log( string );
}

console.log( Employee.println('yeah') ); // undefined at runtime and 'yeah' at class initianlization - remember its in the constructor, meaning on the class not the instance!
console.log( Employee.println ); // Function
