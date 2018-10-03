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