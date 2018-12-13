function ListNode(val) {
    this.val = val;
    this.next = null;
}
function LinkedList(){
	this.head = null;
	this.size = 0;
}

var reorderList = function(head) {
	if(head==null||head.next==null) return;
    var p1 = head;
    var p2 = head;
    
    while(p2.next != null && p2.next.next != null){
    	p1 = p1.next;
    	p2 = p2.next.next;
    }
//    console.log(p1);
//    console.log(p2);
    var preMid = p1;
    var preCurr = p1.next;
    
    while(preCurr.next != null){
    	var curr = preCurr.next;
    	preCurr.next = curr.next;
    	curr.next = preMid.next;
    	preMid.next = curr;
    	
//    	console.log(preMid.next);
//    	console.log("..........",preCurr);
    }
//    console.log(preMid);
    
    p1=head;
    p2=preMid.next;
//  console.log(p1);
    console.log("P2: ",p2);
  console.log(p2.next);
    
    while(p1!=preMid){
    	preMid.next=p2.next;
        p2.next=p1.next;
        p1.next=p2;
        p1=p2.next;
        p2=preMid.next;
//        console.log("..........",p1);
    }
    
//    console.log("===========");
//    console.log(p1);
};

var ll = new LinkedList();;
ll.head = new ListNode(1);
ll.head.next = new ListNode(15);
ll.head.next.next = new ListNode(23);
ll.head.next.next.next = new ListNode(37);
ll.head.next.next.next.next = new ListNode(45);
ll.head.next.next.next.next.next = new ListNode(54);

reorderList(ll.head);
console.log(ll.head);