function Node(val, priority){
	this.val = val;
	this.priority = priority;
	this.next = null;
}

class PriorityQueueUsingHeap{
	constructor(){
		this.heap = [null];
	}
	
	insert(value, priority) { //using Heap
		var newNode = new Node(value, priority);
//		console.log(newNode);
		this.heap.push(newNode);
		var currIdx  = this.heap.length-1;
		var currParentIdx = Math.floor(currIdx/2);
		
		while(this.heap[currParentIdx] && (newNode.priority > this.heap[currParentIdx].priority)){
			var parent = this.heap[currParentIdx];
			this.heap[currParentIdx] = newNode;
			this.heap[currIdx] = parent;
			currIdx = currParentIdx;
			currParentIdx = Math.floor(currIdx/2);
		}
	}
	
	
	remove(){
		if(this.heap.length < 3){
			var toReturn = this.heap.pop();
			this.heap[0] = null;
			return toReturn;
		}
		
		var toremove = this.heap[1];
		this.heap[1] = this.heap.pop();
		var currIdx = 1;
		var [left, right] = [2*currIdx, 2*currIdx + 1];
		var currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;
		
		while(this.heap[currentChildIdx] && this.heap[currIdx].priority <= this.heap[currentChildIdx].priority){
			var currNode = this.heap[currIdx];
			var currChildNode = this.heap[currentChildIdx];
			this.heap[currentChildIdx] = currNode;
			this.heap[currIdx] = currChildNode;
		}
		return toremove;
	}
	
}

class PriorityQueueUsingLL {
	  constructor() {
	    this.first = null;
	  }
	  
	  insert(value, priority) {
	    const newNode = new Node(value, priority);
	    if (!this.first || priority > this.first.priority) {
	      newNode.next = this.first;
	      this.first = newNode;
	    } else {
	      let pointer = this.first;
	      while (pointer.next && priority < pointer.next.priority) {
	        pointer = pointer.next;
	      }
	      newNode.next = pointer.next;
	      pointer.next = newNode;
	    }
	  }
	  
	  remove() {
	    const first = this.first;
	    this.first = this.first.next;
	    return first;
	  }
	  
	}

console.log("=====using Heap======");
var q = new PriorityQueueUsingHeap();
q.insert(100);
q.insert(19);
q.insert(36);
q.insert(17);
q.insert(3);
q.insert(25);
q.insert(1);


console.log(q);

q.remove(100);
console.log("===========");
console.log(q);


console.log("=======using LL========");
var q1 = new PriorityQueueUsingLL();
q1.insert(100);
q1.insert(19);
q1.insert(36);
q1.insert(17);
q1.insert(3);
q1.insert(25);
q1.insert(1);


console.log(q1);

q1.remove(100);
console.log("===========");
console.log(q1);