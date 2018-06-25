function TreeNode(val) {
	this.val = val;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var hasCycle = function(head){
	if(head == null){
		return false;
	}
	
	var n1 = head;
	var n2 = head;
	n2 = n2.next;
	
	
	while(n1 != null && n2 != null){
		
		if(n1.val == n2.val){
			return true;
		}
		
		n1 = n1.next;
		n2 = n2.next;
		
		if(n2!= null){
			n2 = n2.next;
		}
	}
	return false;
	
}

var fll = new LinkedList();
fll.head = new TreeNode(6);
fll.head.next = new TreeNode(4);
fll.head.next.next = new TreeNode(9);
fll.head.next.next.next = new TreeNode(5);
fll.head.next.next.next.next = new TreeNode(6);

//console.log(fll);

console.log(hasCycle(fll.head));