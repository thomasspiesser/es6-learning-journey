class List {
  constructor() {
    // references to the start and the end of the list
    this._start = null;
    this._end = null;
  }
  static makeNode() {
    return {data: null, next: null};
  }
  add(data) {
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
      this._end = this._end.next
    }
    // finally set the data of the new Node
    this._end.data = data;
  }
  insertAsFirst(data) {
    // make temporary node
    let tmp = List.makeNode();
    // fill with data
    tmp.data = data;
    // set the next property to the current first node
    tmp.next = this._start;
    // update the start pointer
    this._start = tmp;
  }
  delete(data) {
    let current = this._start;
    let previous = this._start;
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
  log() {
    let current = this._start;
    while (current !== null) {
     console.log(current.data);
     current = current.next; 
    }
  }
  each(f) {
    let current = this._start;
    while (current !== null) {
      f(current);
      current = current.next; 
    }
  }
}

const list = new List();
// console.log(list);

for (let i = 1; i <= 3; i++) {
  list.add(i);
}

// console.log(list);

// log the list
// list.log();

list.insertAsFirst('h');
// list.log()

list.delete(3);
list.log();

list.each((item)=>console.log(item))


