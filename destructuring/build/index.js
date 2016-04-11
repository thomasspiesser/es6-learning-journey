'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// destructuring assignment
// for arrays
var a = void 0,
    b = void 0,
    c = void 0,
    rest = void 0;

var arr = [1, 2, 3, 4, 5];

a = arr[0];
b = arr[1];


console.log(a);
console.log(b);

a = arr[0];
b = arr[1];
rest = arr.slice(2);


console.log(a);
console.log(b);
console.log(rest);

// can have default values!
a = arr[0];
b = arr[1];
var _arr$ = arr[2];
c = _arr$ === undefined ? 9 : _arr$;
rest = arr.slice(3);


console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// or ignore values

a = arr[0];
c = arr[2];
rest = arr.slice(3);


console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// for objects
var ob = { w: 51, q: 61 };
// with declaration
var w = ob.w;
var q = ob.q;

console.log(w);
console.log(q);
// or without -> need brackets otherwise considered a block
w = ob.w;
q = ob.q;

console.log(w);
console.log(q);

// new variable names
var peter = ob.w;
var otto = ob.q;

console.log('peter');
console.log(peter);
console.log('otto');
console.log(otto);

// default values
var _a = { a: 3 };
var _a$a = _a.a;
a = _a$a === undefined ? 10 : _a$a;
var _a$b = _a.b;
b = _a$b === undefined ? 5 : _a$b;

console.log(a);
console.log(b);

// function parameter default value
function test() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$par = _ref.par1;
  var par1 = _ref$par === undefined ? 'here' : _ref$par;
  var _ref$par2 = _ref.par2;
  var par2 = _ref$par2 === undefined ? 'there' : _ref$par2;

  console.log(par1, par2);
}

test();
test({ par2: 'thomas' });

// Nested object for destructuring
var data = {
  title: 'data-title',
  translation: {
    locale: 'de',
    title: 'Daten-Titel'
  }
};
var _data = data;
var englishTitle = _data.title;
var germanTitle = _data.translation.title;

console.log(englishTitle, germanTitle);
// or with arrays
data = {
  title: 'data-title',
  translations: [{
    locale: 'de',
    title: 'Daten-Titel'
  }, {
    locale: 'fr',
    title: 'titre des data'
  }]
};
var frenchTitle = void 0;
var _data2 = data;
englishTitle = _data2.title;

var _data2$translations = _slicedToArray(_data2.translations, 2);

germanTitle = _data2$translations[0].title;
frenchTitle = _data2$translations[1].title;

console.log(englishTitle, germanTitle, frenchTitle);

// for of iteration and destructuring
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = data.translations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _step.value;
    var t = _step$value.title;
    var l = _step$value.locale;

    console.log('Title: ' + t + ', language: ' + l);
  }

  // pull fields from object passed as function params
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function userId(_ref2) {
  var id = _ref2.id;

  return id;
}
function whois(_ref3) {
  var displayName = _ref3.displayName;
  var name = _ref3.fullName.firstName;

  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"

// computed object property names
var key = "z";
var obj = { z: "peter" };
var onkel = obj[key];


console.log(onkel);
//# sourceMappingURL=index.js.map