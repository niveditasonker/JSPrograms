

function Node(data){
	
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}
var ll = new LinkedList();
var sll = new LinkedList();

ll.head = new Node(6);
ll.head.next = new Node(4);
ll.head.next.next = new Node(9);
ll.head.next.next.next = new Node(5);

sll.head = new Node(3);
sll.head.next = new Node(4);
sll.head.next.next = new Node(2);
sll.head.next.next.next = new Node(7);

var getIntersectionNode = function(headA, headB) {
  var lenA = getLen(headA);
  var lenB = getLen(headB);

  while(lenA > lenB){
    headA = headA.next;
    lenA--;
  }

  while(lenB > lenA){
    headB = headB.next;
    lenB--;
  }

  while(lenA && lenB){
    if(headA == headB){
      return headA;
    }
  

      headA = headA.next;
      headB = headB.next;
  }
  return null;
};

function getLen(head){
  if(head == null){
    return 0;
  }
  var len = 0;
  while(head){
    len++;
    head = head.next;
  }
  return len;
};    


console.log(getIntersectionNode(ll.head,sll.head));