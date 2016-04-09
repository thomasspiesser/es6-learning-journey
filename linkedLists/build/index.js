'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
  function List() {
    _classCallCheck(this, List);

    // references to the start and the end of the list
    this._start = null;
    this._end = null;
  }

  _createClass(List, [{
    key: 'add',
    value: function add(data) {
      if (this._start === null) {
        // if there is no Node yet
        // create a Node
        this._start = List.makeNode();
        // which is the single node, so the is start and end
        this._end = this._start;
      } else {
        // if there is a Node already
        // make a new node and store a reference to that Node in the next
        // property of the current node
        this._end.next = List.makeNode();
        // then update the ref to the last Node
        this._end = this._end.next;
      }
      // finally set the data of the new Node
      this._end.data = data;
    }
  }, {
    key: 'insertAsFirst',
    value: function insertAsFirst(data) {
      // make temporary node
      var tmp = List.makeNode();
      // fill with data
      tmp.data = data;
      // set the next property to the current first node
      tmp.next = this._start;
      // update the start pointer
      this._start = tmp;
    }
  }, {
    key: 'delete',
    value: function _delete(data) {
      var current = this._start;
      var previous = this._start;
      while (current !== null) {
        if (data === current.data) {
          // found the right node
          if (current === this._start) {
            // if it is the first node, set the start pointer to the next one.
            this._start = current.next;
            // and stop the loop
            return;
          } else if (current === this._end) {
            // if it is the last node, set the end pointer to the previous one.
            this._end = previous;
            // and remove the pointer to the former last one.
            this._end.next = null;
          } else {
            // otherwise take one out like a->b->c is a->c, the garbage collector
            // from js will del the node b if there is no pointer to it left.
            previous.next = current.next;
            // and stop the loop
            return;
          }
        }
        previous = current;
        current = current.next;
      }
    }
  }, {
    key: 'log',
    value: function log() {
      var current = this._start;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }, {
    key: 'each',
    value: function each(f) {
      var current = this._start;
      while (current !== null) {
        f(current);
        current = current.next;
      }
    }
  }], [{
    key: 'makeNode',
    value: function makeNode() {
      return { data: null, next: null };
    }
  }]);

  return List;
}();

var list = new List();
// console.log(list);

for (var i = 1; i <= 3; i++) {
  list.add(i);
}

// console.log(list);

// log the list
// list.log();

list.insertAsFirst('h');
// list.log()

list.delete(3);
list.log();

list.each(function (item) {
  return console.log(item);
});
//# sourceMappingURL=index.js.map