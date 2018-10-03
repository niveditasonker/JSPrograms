function ListNode(val) {
    this.val = val;
     this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }

    var ans = new ListNode(0);
    var tmp = ans;
    var carry = 0;
    var digit = 0;

    while (l1 || l2 || carry !== 0) {
        digit = carry;
        if (l1) {
            digit += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            digit += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(digit/10);
        digit = digit % 10;


        tmp.next = new ListNode(digit);
        tmp = tmp.next;
    }

    return ans.next;
    
//    if(l1 === null || l2 === null){
//        return l1 || l2;
//    }
//    
//    var result = new ListNode(0);
//    var cur = result;
//    var p = l1;
//    var q = l2;
//    var carry = 0;
//    
//    while(p || q){
//        var qval;
//        var pval;
//        
//        if(q){
//            qval = q.val;
//            q = q.next;
//        } else {
//            qval = 0;
//        }
//        
//        if(p){
//            pval = p.val;
//            p = p.next;
//        } else {
//            pval = 0;
//        }
//        
//        var val = qval + pval + carry;
//        
//        if(val > 9){
//            carry = 1;
//            val %= 10;
//        } else {
//            carry = 0;
//        }
//        
//        cur.next = new ListNode(val);
//        cur = cur.next;
//    }
//    
//    if(carry !== 0){
//        cur.next = new ListNode(1);
//    }
//    
//    return result.next;

};
var fll = new LinkedList();
var sll = new LinkedList();

fll.head = new ListNode(3);
fll.head.next = new ListNode(4);
fll.head.next.next = new ListNode(7);
//
sll.head = new ListNode(8);
sll.head.next = new ListNode(5);
sll.head.next.next = new ListNode(1);


console.log(addTwoNumbers(fll.head,sll.head));

