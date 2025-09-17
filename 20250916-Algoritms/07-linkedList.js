class Node {
  constructor(value) {
    this.actual = value;
    this.nextTo = null;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.header) {
      this.header = node;
    } else {
      let current = this.header;
      while (current.nextTo) {
        current = current.nextTo;
      }
      current.nextTo = node;
    }
  }

  remove(value) {
    if (!this.header) {
      return;
    }
    if (this.header.actual === value) {
      this.header = this.header.nextTo;
      return;
    }
    let current = this.header;
    while (current.nextTo) {
      if (current.nextTo.actual === value) {
        current.nextTo = current.nextTo.nextTo;
        return;
      }
      current = current.nextTo;
    }
  }

  print() {
    let current = this.header;
    while (current) {
      console.log(current.actual);
      current = current.nextTo;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(5);
list.add(2);
list.add(3);
list.add(6);
list.remove(2);
list.print();
