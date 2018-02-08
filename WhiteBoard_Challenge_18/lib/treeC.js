'use strict';

const Queue = require('./queue.js');

const TreeNode = class {
  constructor(val) {
    this.val = val;
    this.children = []; // Scott haxored this! Feel free to stretch with the SLL! ;-)
  }
};

const K_ary = module.exports = class {
  constructor() {
    this.root = null;
  }
  // Traversal Methods
  breadthFirst(callback) {
    let current = null;
    let queue = new Queue();
    queue.enqueue(this.root);

    while(queue.back) {
      current = queue.dequeue();
      // console.log('que deque === ', current);
      // console.log('current val === ', current.val.val);
      // console.log('current.val.children === ', current.val.children);
      // console.log('current node length === ', current.val.children.length);
      // if (current.val.children.length < 1) {
      //   childs.push(current.val);
      //   console.log('ANSWERS === ', answers);
      // }
      callback(current);

      current.val.children.map(c => queue.enqueue(c));
    }
  }

  // Insertions
  insert(val, parent) {
    if (!val || typeof val !== 'number') return null;
    let tn = new TreeNode(val);

    if(!this.root) {
      this.root = tn;
      return this;
    }

    this.breadthFirst(node => {
      if(parent === node.val.val) {
        node.val.children.push(tn);
        return;
      }
    });
    return this;
  }

  size() {
    let childrenArr = [];
    this.breadthFirst(node => {
      childrenArr.push(node.val.val);
    });
    childrenArr.shift();
    return childrenArr.length;
  }

  // Removals
  // removeByVal(val) {
  //   // Remove the first node you find that matches val
  // }
};
