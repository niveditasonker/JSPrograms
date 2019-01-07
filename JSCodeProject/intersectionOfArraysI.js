var arr1 = [13,14, 15, 16, 18, 22];
var arr2 = [15,18,33,67, 18, 16];
var result =[];

for(var j=0;j<arr2.length;j++){
	if(contains(arr1,arr2[j])){
		if(!contains(result,arr2[j])){
			result.push(arr2[j]);
		}
	}
		
}
console.log(result);

function contains(arr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === value) return true;
    }
    return false;
}

var intersection = function(nums1, nums2) {
    var res = [];
    var hash = new Set();
    
    nums1.sort(function(a,b){return a-b});
    nums2.sort(function(a,b){return a-b});
    
    let i = 0,j=0;
    
    while(i<nums1.length && j<nums2.length){
    	if(nums1[i] > nums2[j])j++;
    	else if(nums1[i] < nums2[j]) i++;
    	else{
    		hash.add(nums1[i]);
    		i++;
    		j++;
    	}
    }
    console.log(hash);
    
    for(n in hash){
    	res.push(n);
    }
    return res;
};


var intersection2 = function(nums1, nums2) {
    var res = [];
    var hash = new Set();
    
    
    for(let i=0;i<nums1.length;i++){
    	hash.add(nums1[i]);
    }
    
    for(let i=0;i<nums2.length;i++){
    	if(hash.has(nums2[i]) && res.indexOf(nums2[i])==-1){
    		res.push(nums2[i]);
    	}
    }

    return res;
};

console.log(intersection(arr1,arr2)); //NlogN
console.log(intersection2(arr1,arr2)); //O(N)