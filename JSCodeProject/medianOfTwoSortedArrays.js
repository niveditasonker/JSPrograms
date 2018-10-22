var arr1 = [1,3];
var arr2 = [2];

console.log(findMedianSortedArrays(arr1,arr2));

function findMedianSortedArrays(nums1, nums2){
	var N1 = nums1.length;
	var N2 = nums2.length;
	
	if (N1 < N2) return findMedianSortedArrays(nums2, nums1);
	
	var lo = 0;
	var hi = N2*2;
	
	while(lo<=hi){
		var mid2 = parseInt((lo + hi)/2);
		var mid1 = N1+N2 - mid2;
		
		var L1 = (mid1 == 0) ? Number.MIN_SAFE_INTEGER : nums1[(mid1-1)/2];
		var L2 = (mid2 == 0) ? Number.MIN_SAFE_INTEGER : nums2[(mid2-1)/2];
        var R1 = (mid1 == N1 * 2) ? Number.MAX_SAFE_INTEGER : nums1[(mid1)/2];
        var R2 = (mid2 == N2 * 2) ? Number.MAX_SAFE_INTEGER : nums2[(mid2)/2];
        
        if (L1 > R2) lo = mid2 + 1;
        else if (L2 > R1) hi = mid2 - 1;
        else return (Math.max(L1,L2) + Math.min(R1, R2)) / 2;
	}
	return -1;
}