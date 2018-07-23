function Node(data){
	this.data =data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var ll = new LinkedList();;
ll.head = new Node(5);
ll.head.next = new Node(8);
ll.head.next.next = new Node(5);
ll.head.next.next.next = new Node(10);
ll.head.next.next.next.next = new Node(2);
ll.head.next.next.next.next.next = new Node(1);


LinkedList.prototype.insert = function(val){
	
	
	if(this.head == null){
		this.head  = new Node(val);
	}else{
		var node = this.head;
		while(node.next){
			node = node.next;
		}
		node.next = new Node(val);
	}
}

LinkedList.prototype.partition = function(val){
	var node = this.head;
//	console.log(node);
	
	var beforeLL = new LinkedList();
	var afterLL = new LinkedList();
	
	var curr = this.head;
	
	while(curr){
		if(curr.data < val){
			beforeLL.insert(curr.data);
		}else if(curr.data >= val){
			afterLL.insert(curr.data);
		}
		
		curr = curr.next;
	}
	
//	console.log(beforeLL);
//	console.log(afterLL);
	
	var temp = beforeLL.head;
	while(temp.next){
		temp = temp.next;
	}
	
	temp.next = afterLL.head;
	
	return beforeLL;
}

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp){
		str += temp.data + " ";
		temp = temp.next;
		
	}
	console.log("LL",str);
}


//ll.printList();
ll.partition(8);
ll.printList();






function LinkedList1 () {
    this.head = null;
}


LinkedList1.prototype.insertNodeAtTail = function(val){
    var node = {
      data: val,
      next: null
    };

    if (!this.head) {
      this.head = node;
    } else {
      var p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }


LinkedList1.prototype.partitionList = function(val) {
  var beforeVal = new LinkedList1();
  var afterVal = new LinkedList1();
  var p1 = this.head;

  while (p1) {
    if (p1.data < val) {
      beforeVal.insertNodeAtTail(p1.data);
    } else if (p1.data >= val) {
      afterVal.insertNodeAtTail(p1.data);
    }
    p1 = p1.next;
  }

  // merge beforeVal and afterVal LinkedLists
  var p2 = beforeVal.head;
  while (p2.next) {
    p2 = p2.next;
  }
  p2.next = afterVal.head;

  return beforeVal;
};


LinkedList1.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp){
		str += temp.data + " ";
		temp = temp.next;
		
	}
	console.log("LL",str);
}


// Create an instance of a LinkedList class
var L1 = new LinkedList1();

// Create a linked list with six elements
//var testData = [7,10,5,11,2,4];
var testData = [5,8,5,10,2,1];
testData.forEach(el => L1.insertNodeAtTail(el));

//console.log(L1.partitionList(8));
L1.partitionList(8);
L1.printList();