var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];



//console.log(intersect(nums1,nums2));

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

var intersect2 = function(nums1, nums2) {
    var data = {};
    var res = [];
    
    for(let i of nums1){
    	data[i] = data[i] || 0;
    	data[i]++;
    }
//    console.log(data);
    
    for(let i of nums2){
    	if(i in data && data[i]>0){
    		res.push(i);
    		data[i]--;
    	}
    }
    
    return res;
    
};

var intersect = function(nums1, nums2) {
    var res = [];
    var hash = {};
    
    if(nums1.length > nums2.length) return intersect(nums2, nums1);
    
    for(let i=0;i<nums1.length;i++){
    	hash[nums1[i]] = hash[nums1[i]] || 0;
        hash[nums1[i]]++;
    }
    
    for(let i=0;i<nums2.length;i++){
    	if( nums2[i] in hash && hash[nums2[i]] > 0){
    		res.push(nums2[i]);
            hash[nums2[i]]--;
    	}
    }

    return res;      
};

console.log(intersect(nums1,nums2));
console.log(intersect2(nums1,nums2));

var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];

console.log(intersect(nums1,nums2));
console.log(intersect2(nums1,nums2));

