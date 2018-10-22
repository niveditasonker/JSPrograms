var arr = [10, 21, 22, 100, 101, 200, 300];

function countTriangles(nums){
	var n = nums.length;
	nums.sort(function(a,b){
		return a - b;
	})
	var count = 0;
	
	for(var i=0;i<n-2;i++){
		var k = i+2;
		for(var j=i+1;j<n;j++){
			while(k<n && arr[i]+arr[j] > arr[k]) {
				k++;
				count += k-j-1;
			}
		}
	}
	
	return count;
}

console.log(countTriangles(arr));