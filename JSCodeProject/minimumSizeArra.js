var nums = [2,3,1,2,4,3];
var sum = 7;

console.log(minSzArr(nums, sum));

function minSzArr(n, target){
	var sum = 0;
	var i=0;
	var j=0;
	var min = Number.MAX_VALUE;
	
	while(j<n.length){
//		console.log(i,j);
		sum += n[j++];
//		console.log("......."+sum,i,j);
		while(sum>=target){
//			console.log(min,i,j);
			min = Math.min(min,j-i);
			sum -= n[i++];
		}
	}
	return min==Number.MAX_VALUE?0:min;
}

var nArr = [1, -1, 5, -2, 3];
//var nArr =[-2, -1, 2, 1];
var k=3;
//var k = 1;
console.log(maxSzArr(nArr, k));

function maxSzArr(n, target){
	
	var subArrlen = 0;
	var sum = 0;
	var map = {0: -1};
	
	n.forEach(function(no,i){
		sum += no;
		if(!map.hasOwnProperty(sum)){
			map[sum] = i;
		}
		
		if(map.hasOwnProperty(sum-k)){
			subArrlen = Math.max(subArrlen,i-map[sum-k]);
		}
	});
	
	return subArrlen;
	
}