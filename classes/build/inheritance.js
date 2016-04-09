'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classes = require('./classes.js');

var _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subcontractor = function (_Employee) {
  _inherits(Subcontractor, _Employee);

  function Subcontractor(name, specialty) {
    _classCallCheck(this, Subcontractor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Subcontractor).call(this, name));

    _this._specialty = specialty;
    return _this;
  }

  _createClass(Subcontractor, [{
    key: 'logSpecialty',
    value: function logSpecialty() {
      if (this._specialty) {
        return this._specialty;
      } else {
        return "can't do anything special";
      }
    }
  }, {
    key: 'learn',
    value: function learn(specialty) {
      this._specialty = specialty;
    }
  }, {
    key: 'useSuperWork',
    value: function useSuperWork() {
      console.log(_get(Object.getPrototypeOf(Subcontractor.prototype), 'doWork', this).call(this));
      console.log('something');
    }
  }]);

  return Subcontractor;
}(_classes2.default);

var hire = new Subcontractor('Peter');

console.log('\nnew hire: \n');

console.log(hire.getName());
console.log(hire.logSpecialty());
hire.learn('cooking');
console.log(hire.logSpecialty());

hire.name = 'Peterle';

hire.useSuperWork();
//# sourceMappingURL=inheritance.js.map