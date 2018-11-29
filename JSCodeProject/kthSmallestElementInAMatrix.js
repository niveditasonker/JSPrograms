var matrix = [
	 [ 1, 5, 9 ],
	 [ 10, 11, 13 ],
	 [ 12, 13, 15 ]
	];

var kthSmallest = function(matrix, k) { 
	var lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1]+1;
	console.log(lo,hi);

	while(lo<hi){
		var count=0;
		var j=matrix[0].length-1;
		var mid = lo + parseInt((hi - lo) / 2);
//		console.log("........",lo + parseInt((hi - lo) / 2), parseInt(hi/2));
		console.log(lo, hi,count,j,mid);
		for(let i=0;i<matrix.length;i++){
			while(j >= 0 && matrix[i][j] > mid) {
//				console.log("In while...", matrix[i][j],j,mid);
				j--;
			}
			count += (i+j);
		}
		if(count < k) lo = mid+1;
		else hi = mid;
	}
	return lo;
}

var kthSmallestUsingMergeSort = function(matrix, k) { 
	var sorted = partition(matrix,0,matrix.length-1);
	return sorted[k-1];
}

function partition(mat,stRow,stopRow){
	if(stRow==stopRow){
		return mat[stRow];
	}
	
	var mid  = (stRow + stopRow) >> 1;
	var left = partition(mat,stRow,mid);
	var right = partition(mat,mid+1,stopRow);
	
	return merge(left,right);
}

function merge(A, B){
	var i=0, j=0;
	var res = [];
	
	while(i<A.length && j<B.length){
		if(A[i]<=B[j]) res.push(A[i++]);
		else res.push(B[j++]);
	}
	
	while(i<A.length) res.push(A[i++]);
	while(j<B.length) res.push(B[j++]);
	
	return res;
}

console.log(kthSmallest(matrix,8)); // using Binary Search, check(Log(n(LogM)));
console.log(kthSmallestUsingMergeSort(matrix,8)); //nLogN

//can be done using priority queue:
//https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/145056/JavaScript-solution-using-min-heap