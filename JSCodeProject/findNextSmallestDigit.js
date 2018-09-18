var num = "534976";

function findNextNum(arr){
	var n = arr.length;
	/*	
	var i;
	
	for(i=n-1;i>0;i--){
		if(arr[i] > arr[i-1]) break;
	}
	
	if(i==0) console.log("Not possible");
	else{
		var min = i;
		var x = arr[i-1];
		
		for(var j=i+1;j<n;j++){
			if(arr[j] > x && arr[j] < arr[min]){
				min = j;
			}
		}
		
		var temp = arr[i-1];
		arr[i-1] = arr[min];
		arr[min] = temp;
		
		console.log(arr);
		console.log(sortArr(arr,i,n));
	}
	
	
*/	
	
	
	var i;
	
	// I) Start from the right most digit 
	// and find the first digit that is smaller 
	// than the digit next to it.
	for (i = n - 1; i > 0; i--) 
	{
		if (arr[i] > arr[i - 1]) {
			break;
		}
	}
	
	// If no such digit is found, then all 
	// digits are in descending order means 
	// there cannot be a greater number with 
	// same set of digits
	if (i == 0) 
	{
		console.log("Not possible");
	} 
	else
	{
		var x = arr[i - 1], min = i;
		
		// II) Find the smallest digit on right 
		// side of (i-1)'th digit that is greater 
		// than number[i-1]
		for (var j = i + 1; j < n; j++) 
		{
			if (arr[j] > x && arr[j] < arr[min]) 
			{
				min = j;
			}
		}

		// III) Swap the above found smallest 
		// digit with number[i-1]
		console.log(swap(arr, i - 1, min));

		// IV) Sort the digits after (i-1) 
		// in ascending order
		console.log(arr);
//		Arrays.sort(ar, i, n);
//		System.out.print("Next number with same" +
//								" set of digits is ");
//		for (i = 0; i < n; i++)
//			System.out.print(ar[i]);
	}
	
}

function swap( ar,  i,  j) 
{
	var temp = ar[i];
	ar[i] = ar[j];
	ar[j] = temp;
}
function sortArr(arr,start,end){
	for(var i=start;i<end;i++){
		if(arr[i] < arr[i+1]){
			var temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	return arr;
}

function nextBigger(n){
	  var d = n.toString().split('');
	  
	  // find the pivot, the point (from right) where i > i-1
	  var p = -1;
	  for (var i = d.length-1; i > 0; i--) {
	    if (+d[i] > +d[i-1]) {
	      p = i-1;
	      break;
	    }
	  }
	  
	  // if we are unable to find the pivot, skip
	  if (p == -1) return p;
	    
	  // splice the digits in the pivot
	  var right = d.splice(p);
	  console.log("Right: ",p, right);
	  // extract pivot
	  var pv = right.splice(0, 1)[0];
	  console.log("Pv: ",pv);
	  
	  // find the lowest number > pv
	  var mm = null, mmi = null;
	  for (var i = 0; i < right.length; i++) {
	    if (right[i] > pv) {
	    	
	      if (mm == null || right[i] < mm) {
	    	  console.log(i,right[i],mm,mmi);
	        mm = right[i];
	        mmi = i;
	      }
	    }
	  }

	  if (mmi == null) return -1;
	  
	  console.log(right.splice(mmi, 1));
	  
	  right.push(pv);
	  right = right.sort();
	  
	  // concat the left + new pivot + right part
	  var ret = +d.concat([mm]).concat(right).join('');
	  if (ret < n) return -1;
	  
	  return ret;
	}

//findNextNum(num);
console.log(nextBigger(num));