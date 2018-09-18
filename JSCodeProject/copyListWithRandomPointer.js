function RandomListNode(label) {
     this.label = label;
     this.next = this.random = null;
}

var copyRandomList = function(head) {
    var hashMap = {};
    
    var newHead = new RandomListNode(0);
    newHead.next = copyList(head);
    
    function copyList(node){
    	if(node==null) return node;
    	
    	if(hashMap[node.label]) return hashMap[node.label];
    	
    	var newNode = new RandomListNode(node.label);
    	hashMap[node.label] = newNode;
    	
    	newNode.next = copyList(node.next);
    	newNode.random = copyList(node.random);
    	console.log("random...");
    	console.log(newNode.random);
    	return newNode;
    }
    
    return newHead.next;
};

function LinkedList(){
	this.head = null;
	this.size = 0;
}


var fll = new LinkedList();
fll.head = new RandomListNode("A");
fll.head.next = new RandomListNode("B");
fll.head.next.next = new RandomListNode("C");
fll.head.next.next.next = new RandomListNode("D");
fll.head.next.next.next.next = new RandomListNode("E");
fll.head.next.next.next.next.next = new RandomListNode("F");

console.log(copyRandomList(fll.head));