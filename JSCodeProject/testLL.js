var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

var Queue = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.add = function(value) {
  var node = new LinkedList(value);
  if (this.front === null) {
    this.front = node;
    this.back = node;
  } else {
    var prevBack = this.back;
    this.back = node;
    prevBack.next = this.back;
  }
};

Queue.prototype.remove = function() {
  var removed = this.front;
  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  } else {
    this.front = this.front.next;
  }
  return removed !== null ? removed.value : null;
};

Queue.prototype.peek = function() {
  return this.front !== null ? this.front.value : null;
};

Queue.prototype.isEmpty = function() {
  return this.front === null;
};

module.exports = Queue;









var BST = function(value) {
	  this.value = value;
	  this.left = null;
	  this.right = null;
	};

	BST.prototype.insert = function(value) {
	  if (value < this.value) {
	    if (this.left === null) {
	      this.left = new BST(value);
	    } else {
	      this.left.insert(value);      
	    }
	  } else {
	    if (this.right === null) {
	      this.right = new BST(value);
	    } else {
	      this.right.insert(value);
	    }
	  }
	};

	BST.prototype.printLevelOrder = function() {
	  var level = [];
	  var q = new Queue();
	  var nextq = new Queue();
	  var currNode;

	  q.add(this);
	  while (!q.isEmpty()) {
	    currNode = q.remove();
	    level.push(currNode.value);
	    if (currNode.left !== null) {
	      nextq.add(currNode.left);
	    }
	    if (currNode.right !== null) {
	      nextq.add(currNode.right);
	    }
	    if (q.isEmpty()) {
	      console.log(level.join(','));
	      level = [];
	      q = nextq;
	      nextq = new Queue();
	    }
	  }
	};

	module.exports = BST;
	
	
	var listOfDepths = function(bst) {
		  var listOfLists = [];
		  var list = null;
		  var newNode;
		  var q = new Queue();
		  var nextq = new Queue();
		  var currNode = bst;

		  q.add(currNode);
		  while (!q.isEmpty()) {
		    currNode = q.remove();
		    newNode = new LinkedList(currNode.value);
		    newNode.next = list;
		    list = newNode;
		    if (currNode.left !== null) {
		      nextq.add(currNode.left);
		    }
		    if (currNode.right !== null) {
		      nextq.add(currNode.right);
		    }
		    if (q.isEmpty()) {
		      listOfLists.push(list);
		      list = null;
		      q = nextq;
		      console.log(q);
		      console.log(".....");
//		      console.log(nextq);
		      nextq = new Queue();
//		      console.log(">>>>>>>");
//		      console.log(nextq);
		    }
		  }
		  return listOfLists;
		};

		/* TEST */
		// 1, 2, 3, 4, 5, 6, 7
		var tree = new BST(4);
		tree.insert(2);
		tree.insert(6);
		tree.insert(1);
		tree.insert(3);
		tree.insert(5);
		tree.insert(7);

//		console.log(listOfDepths(tree));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		function BinarySearchTree () { 
			  this.root = null;
			}

			function LinkedList () {
			    this.head = null;
			}

			function createLevelLinkedList (root, lists, level) {
			  if (root === null) { // base case
			    return;
			  }

			  var list = null;
			  if (lists.length === level) {
			    list = new LinkedList();
			    lists[level] = list;
			  } else {
			    list = lists[level];
			  }

			  // http://js-interview.tutorialhorizon.com/2015/10/03/javascript-linked-list-example/
			  list.insertNodeAtTail(root.data); 
			  
			  createLevelLinkedList(root.left, lists, level + 1);
			  createLevelLinkedList(root.right, lists, level + 1);
			}

			// Create a new Balanced Binary Tree as a sample input
			// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
			var BST = new BinarySearchTree();
			var testDate = [8,3,10,1,6,14,4,7];
			testData.forEach(el => BST.insertNode(el));

			var lists = [];
			createLevelLinkedList(BST.root, lists, 0);
			console.log('Linked Lists : ', lists);