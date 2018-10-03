function ListNode(val) {
    this.val = val;
     this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var isPalindrome = function(head) {
    var fast = head,
        slow = head,
        midPoint;
    
    if (head === null || head.next === null) {
        return true;
    }
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    midPoint = reverse(slow);
    fast = head;
    
    while (midPoint && fast && (fast.val === midPoint.val)) {
        midPoint = midPoint.next;
        fast = fast.next;
    }

    return midPoint === null;
};

function reverse(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    var newHead = reverse(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}




var fll = new LinkedList();


fll.head = new ListNode(3);
fll.head.next = new ListNode(4);
fll.head.next.next = new ListNode(7);
fll.head.next.next.next = new ListNode(4);
fll.head.next.next.next.next = new ListNode(3);

console.log(isPalindrome(fll.head));