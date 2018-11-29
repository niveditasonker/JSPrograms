function ListNode(val) {
    this.val = val;
     this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}


var addTwoNumbers = function(l1, l2) {
    var s1 = [];
    var s2 = [];

    while(l1 !== null) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 !== null) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    
    var sum = 0;
    var list = new ListNode(0);
    while(s1.length > 0 || s2.length > 0) {
        if(s1.length > 0) sum += s1.pop();
        if(s2.length > 0) sum += s2.pop();
        list.val = sum % 10;
        var head = new ListNode((sum / 10)>>0);
        head.next = list;
        list = head;
        sum = (sum / 10) >> 0;
    }
    return list.val === 0 ? list.next : list;  
}

var fll = new LinkedList();
var sll = new LinkedList();

fll.head = new ListNode(7);
fll.head.next = new ListNode(2);
fll.head.next.next = new ListNode(4);
fll.head.next.next.next = new ListNode(3);
//
sll.head = new ListNode(5);
sll.head.next = new ListNode(6);
sll.head.next.next = new ListNode(4);


console.log(addTwoNumbers(fll.head,sll.head));
