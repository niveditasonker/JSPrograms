 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
function LinkedList(){
	this.head = null;
	this.size = 0;
} 
var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true;
    }
    
    var slow = head;
    var fast = head;
    
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // if fast.next === null it's odd
    // else fast.next !== null it's even
    // but wether it's odd or even, we want to reverse slow's next
    // 1 2 3 3 2 1 
    // slow is pointing at 3 (index 2) and we want to reverse 3 2 1
    // to 1 2 3 1 2 3
    // 
    // 1 2 3 4 3 2 1
    // slow is pointing at 4 (index 3) and we want to reverse 3 2 1
    // to 1 2 3 4 1 2 3

    var secondHead = slow.next;
    slow.next = null;
    
    var p1 = secondHead;
    var p2 = secondHead.next;
    
    while(p1 && p2){
        var temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
    }
    
    secondHead.next = null; // !important
    
    p = p1;
    q = head;
    
    while(p && q){
        if(p.val !== q.val){
            return false;
        }
        
        p = p.next;
        q = q.next;
    }
    
    return true;
}

var isPalindrome2 = function(head) {
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


var ll = new LinkedList();

ll.head = new ListNode(3);
ll.head.next = new ListNode(4);
ll.head.next.next = new ListNode(9);
ll.head.next.next.next = new ListNode(4);
ll.head.next.next.next.next = new ListNode(3);

console.log(isPalindrome(ll.head));

var ll = new LinkedList();

ll.head = new ListNode(3);
ll.head.next = new ListNode(4);
ll.head.next.next = new ListNode(9);
ll.head.next.next.next = new ListNode(4);
ll.head.next.next.next.next = new ListNode(3);
console.log(isPalindrome2(ll.head));