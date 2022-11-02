const SinglyLinkedListNode = require("./SinglyLinkedListNode.js");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAt(val, position) {
    if (position > this.size || position < 0) {
      return -1;
    }
    let newNode = new SinglyLinkedListNode(val);

    if (this.size == 0) {
      this.size++;
      this.head = newNode;
      return newNode;
    }

    if (position == this.size) {
      this.pushBack(val);
      return newNode;
    }
    /*     
  if (position == 0) {
      let temp = this.head
      this.head = newNode
      newNode.next = temp
      this.size++
      
      return newNode
    } */

    let ptr = this.head;

    while (position >= 2) {
      position--;
      ptr = ptr.next;
    }

    let tempNext = ptr.next;
    ptr.next = newNode;
    newNode.next = tempNext;
    if (position == this.size - 1) {
      this.tail = newNode;
    }
    this.size++;

    return newNode;
  }

  size() {
    /* let ptr = this.head
    let size = 0
    while (ptr.next) {
      ptr = ptr.next
      size++
    } */
    return this.size;
  }

  deleteAt(position) {
    if (position > this.size - 1 || position < 0) {
      return -1;
    }
    let ptr = this.head;

    while (position >= 2) {
      position--;
      ptr = ptr.next;
    }
    ptr.next = ptr.next.next;
    this.size--;

    return ptr;
  }

  getAt(position) {
    if (position > this.size - 1 || position < 0) {
      return -1;
    }
    while (position >= 2) {
      position--;
      ptr = ptr.next;
    }

    return ptr;
  }

  pushBack(val) {
    let newNode = new SinglyLinkedListNode(val);

    if (this.size == 1) {
      this.tail = newNode;
      this.head.next = newNode;
      this.size++;

      return this.tail;
    }

    let temp = this.tail;
    this.tail = newNode;
    temp.next = newNode;
    this.size++;
    return this.tail;
  }

  pushFront(val) {
    let newNode = new SinglyLinkedListNode(val);
    let temp = this.head;
    this.head = newNode;
    newNode.next = temp;
    this.size++;
    return this.head;
  }
}

module.exports = SinglyLinkedList;
