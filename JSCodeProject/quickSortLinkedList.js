function ListNode(val) {
    this.val = val;
     this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

function changeToArr(ll){
	var arr = [];
	while(ll){
		arr.push(ll);
		ll = ll.next;
	}
	
//	console.log(arr);
	return quickSortLL(arr);
}
function quickSortLL(arr){
	if(arr.length < 2){
		return arr;
	}
	
	var left = [];
	var right = [];
	var result = [];
	var pivot = arr.pop();
//	console.log("......",pivot);
	
	for(var i=0;i<arr.length;i++){
		if(arr[i].val<= pivot.val){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	var tmpL = quickSortLL(left);
	var tmpR = quickSortLL(right);
//	console.log(".....",tmpR);
	return result.concat(quickSortLL(left),pivot,quickSortLL(right));
}

var fll = new LinkedList();


fll.head = new ListNode(3);
fll.head.next = new ListNode(4);
fll.head.next.next = new ListNode(7);
fll.head.next.next.next = new ListNode(4);
fll.head.next.next.next.next = new ListNode(3);

//console.log(sortList(fll.head));
//var arr = [];
//arr.push(fll.head);
console.log(changeToArr(fll.head));
