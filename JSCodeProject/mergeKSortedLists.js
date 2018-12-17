function ListNode(val) {
     this.val = val;
     this.next = null;
}

var inp = [
	  1,4,5,
	  1,3,4,
	  2,6
	];
var mergeKLists = function(lists) {
	
	function merge(beg, end, lists){
		console.log("..........2");
		if(beg > end){
			return [];
		}
		
		if(beg == end){
			return lists[beg];
		}
		
		var mid = beg + Math.floor((end-beg)/2);
		var left = merge(beg,mid,lists);
		var right = merge(mid+1,end,lists);
		
		return mergeLists(left, right);
	}
	
	function mergeLists(l1, l2){
		console.log("..........3");
		var data = new ListNode(0);
	    var temp = data;
	    
	    
	    while(l1 && l2){
	    	if(l1.val > l2.val){
	    		temp.next = l2;
	    		l2 = l2.next;
	    	}else{
	    		temp.next = l1;
	    		l1 = l1.next;
	    	}
	    	temp = temp.next;
	    }
		if(l1){
			temp.next=l1;
		}else{
			temp.next=l2;
		}
		
//		temp = data.next;
//		data.next = null;
//		
//		console.log(temp);
//		return temp;
        temp = temp.next;
        return data.next;

	}
//	console.log("..........1");
	return merge(0,lists.length-1,lists);
}

console.log(mergeKLists(inp)); //n*log(k); If n is num of nodes/list, then n*k*log(k);