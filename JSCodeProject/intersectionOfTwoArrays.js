var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

console.log(intersect(nums1,nums2));

function intersect(a,b){
	var arr = [];

	while(a.length > 0 && b.length > 0){
		if(a[0] != b[0]){
//		if(a[0] < b[0] || a[0] > b[0]){
//		if(a[0] < b[0]){
//			a.shift();
//		}else if(a[0] > b[0]){
			a.shift();
		}else{
			arr.push(a.shift());
			b.shift();
		}
	}
	
	return arr;
	
}

