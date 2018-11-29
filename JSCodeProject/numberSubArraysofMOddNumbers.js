var nums = [2, 2, 5, 6, 9, 2, 11];
var m = 2;


function countSubarrays(arr,m){
	var count = 0;
	var prefix = [];
	var odd = 0;
	
	for(let i=0;i<arr.length;i++){
//		console.log("odd: ",odd);
	    if (prefix[odd]) {
	    		prefix[odd]++;
		    } else {
		    	prefix[odd] = 1;
		    }
//		console.log(prefix, odd,arr[i]);
		
		if((arr[i] % 2)==1) odd++;
		
		if(odd>=m){
//			console.log(".....",odd, count, (odd-m));
			count += prefix[odd-m];
		}
	}
	
	return count;

}

function beautifulArray(arr, m) {
	  var noOfOddNumbersSoFar = 0;
	  var ans = 0;
	  var save = []; // Save possible number of sub arrays till i with m odd numbers

	  for (var i = 0; i < arr.length; i++) {
	    if (save[noOfOddNumbersSoFar]) {
	      save[noOfOddNumbersSoFar]++;
	    } else {
	      save[noOfOddNumbersSoFar] = 1;
	    }

	    noOfOddNumbersSoFar += arr[i] % 2 == 0 ? 0 : 1;

	    if (noOfOddNumbersSoFar >= m) {
	      ans += save[noOfOddNumbersSoFar - m];
	    }
	  }

	  return ans;
	}

console.log(countSubarrays(nums,m));
console.log(beautifulArray(nums,m));