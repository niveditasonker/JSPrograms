function Node(val){
	this.val = val;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var oddEvenList = function(head) {

    if(head != null){
        var odd = head;
        var even = head.next;
        var evenHead = even;
	    while(even!=null && even.next!=null){
	    	odd.next = odd.next.next;
	    	even.next = even.next.next;
	    	odd = odd.next;
	    	even = even.next;
	    	
	    }
	    odd.next = evenHead;
    }
    console.log(head);
    return head;
};

var oddEvenList2 = function(head){
	
    if (head == null || head.next == null)
        return head;
   
    var res = head, pre = head, cur = head.next;
    
    
    for (var i = 2; cur.next != null; i++) {
        if (i % 2 == 0) {
            var temp = pre.next;
            pre.next = cur.next;
            cur.next = cur.next.next;
            pre.next.next = temp;
            pre = pre.next;
        } else {
            cur = cur.next;
        }
    }
    console.log(res);
    return res;
}

var fll = new LinkedList();
fll.head = new Node(3);
fll.head.next = new Node(4);
fll.head.next.next = new Node(7);
fll.head.next.next.next = new Node(5);
fll.head.next.next.next.next = new Node(8);
fll.head.next.next.next.next.next = new Node(9);

oddEvenList(fll.head);
oddEvenList2(fll.head);