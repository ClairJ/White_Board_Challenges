'use strict';

const Nd = require('./node.js');

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(element){
    this.node = new Nd(element);
    if(this.head === null){
      this.head = this.node;
    }else {
      var currentNode = this.head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = this.node;
    }

    this.length++;
  }

  remove(element){
    var currentNode = this.head;
    var previousNode;
    if(currentNode.element === element){
      this.head = currentNode.next;
    }else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  indexOf(element) {
    var currentNode = this.head;
    var index = -1;

    while(currentNode){
      index++;
      if(currentNode.element === element){
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }
}


module.exports = LinkedList;
