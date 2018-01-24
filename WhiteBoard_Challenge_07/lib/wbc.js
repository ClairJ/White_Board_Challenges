const solution = module.exports = {};

solution.LinkedList = function() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };


  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    }else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };
};

let list = new solution.LinkedList();
list.add(10);
list.add(20);
list.add(15);
list.add(23);
list.add(31);
list.add(56);
list.add(1);
let looper = list.head().next.next.next.next = list.head().next.next.next;
console.log('list === ', list);


//best case O(1) the worst case is O(n) due to iteration
solution.findLoopedList = function(LL) {
  if(!LL.head()) return null;
  console.log('enter findLL', LL);
  let slow = LL.head();
  let fast = LL.head();
  while(slow !== null && fast !== null && fast.next !== null) {
    console.log('==iteration==');
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      console.log('complete');
      return true;
    }
  }
  return false;
};
