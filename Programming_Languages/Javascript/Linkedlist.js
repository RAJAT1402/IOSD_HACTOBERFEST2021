// 10-->5-->16

// Example linked list
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

// singly linked list node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// doubly linked list node
class DNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new DNode(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1;
  }

  prepend(value) {
    const newNode = new DNode(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new DNode(value);
    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const leaderNext = leader.next.next;
    leader.next = leaderNext;
    leaderNext.prev = leader;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLl = new LinkedList(10);
myLl.append(2);
myLl.append(16);
// myLl.prepend(1);
// myLl.insert(2, 100);
// myLl.remove(1);
myLl.reverse();
console.log(myLl);

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    console.log(newNode);
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;
    leader.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const leaderNext = leader.next.next;
    leader.next = leaderNext;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
