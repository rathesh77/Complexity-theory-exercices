const SinglyLinkedList = require("./SinglyLinkedList.js");
const SinglyLinkedListNode = require("./SinglyLinkedListNode.js");

const list = new SinglyLinkedList();

list.insertAt(6, 0);
list.insertAt(12, 1);
list.insertAt(22, 2);
list.insertAt(24, 3);

list.pushBack(34);
list.pushFront(2);

console.log(list);
