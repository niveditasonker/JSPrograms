function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var fll = new LinkedList();
var sll = new LinkedList();

fll.head = new Node(3);
fll.head.next = new Node(4);
fll.head.next.next = new Node(7);
//
sll.head = new Node(8);
sll.head.next = new Node(5);
sll.head.next.next = new Node(1);

LinkedList.prototype.printList = function(list){
//	var temp = this.head;
	var str = "";
	
	while(list){
		str += list.data + " ";
		list = list.next;
		
	}
	console.log("LL",str);
}


LinkedList.prototype.megeTwoLL = function(first,sec){
	var data = new Node(-1);
    var temp = data;
	
	while(first && sec){
		if(first.data >= sec.data){
			temp.next = sec;
			sec = sec.next;
		}else{
			temp.next = first;
			first = first.next;			
		}
		temp=temp.next;
	}
	if(first){
		temp.next=first;
	}else{
		temp.next=sec;
	}
	
	console.log(data.next);
	return data.next;


}
	
//    var p1 = l1;
//    var p2 = l2;
//    var fn = new ListNode(-1);
//    var p = fn;
//    
//    
//    while(p1 && p2){
//        if(p1.val >= p2.val){
//            p.next = p2;
//            p2 = p2.next;
//        } else {
//            p.next = p1;
//            p1 = p1.next;
//        }
//        p = p.next;
//    }
//    
//    if(p1){
//        p.next = p1;
//    } else {
//        p.next = p2;
//    }
//    
//    return fn.next;
//}

var rll = new LinkedList();

var mergedll = rll.megeTwoLL(fll.head, sll.head);
//rll.printList(mergedll);
console.log(mergedll);



LinkedList.prototype.mergeTwoLL2 = function(l1,l2){
	var temp;
	var curr;
	
	if(!l1) return l2;
	
	if(! l2){
		return l1;
	}
	
	if(l1.val < l2.val){
		temp = l1;
		curr = temp;
		l1= l1.next;
	}else{
		temp = l2;
		curr = temp;
		l2 = l2.next;
		
	}
	
	while(l1 && l2){
		if(l1.val < l2.val){
			curr.next = l1;
			curr = l1;
			l1 = l1.next;
		}else{
			curr.next = l2;
			curr = l2;
			l2 = l2.next;
		}
	}
	
    if (l1) {
        curr.next = l1;
    } else if (l2) {
        curr.next = l2;
    }
    
    return temp;
}

//console.log(mergeTwoLL2(fll.head,sll.head));