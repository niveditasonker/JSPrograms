function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

LinkedList.prototype.insert = function(val){
	var node = new Node(val);
	node.next = this.head;
	this.head = node;
}

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp != null){
		str += temp.data + " ";
		temp = temp.next;
	}
	
	console.log("LL: "+str);
}

LinkedList.prototype.detectLoop = function(){
	var fptr = this.head;
	var sptr = this.head;
	
	while(fptr != null && sptr != null){
		fptr = fptr.next;
		sptr = sptr.next.next;
		if(fptr == sptr){
			console.log("Cycle found");
			return 1;
		}else{
			console.log("No Cycle found");
		}
	}
	return 0;
}

LinkedList.prototype.detectCycle = function(){
	var cycle = {};
	
	var temp = this.head;
	
//	while(temp != null){
//		if(cycle[temp] != undefined){
//			console.log("No Cycle found....hash");
//		}else{
//			console.log("Cycle found....hash");
//			return 1;
//		}
//	}
	
	while(temp != null){
		if(cycle[temp.data] == undefined){
			cycle[temp.data]=1;
		}else{
			console.log("Cycle found....hash");
			return 1;
		}
		temp = temp.next;
		console.log(cycle);
	}
}
var ll = new LinkedList();


ll.insert(20);
ll.insert(4);
ll.insert(15);
ll.insert(10);
ll.printList();
ll.head.next.next.next.next = ll.head;
//ll.detectLoop();
ll.detectCycle();
