var num1 = [13,14, 15, 16, 18, 22];
var num2 = [1,2, 6, 9, 12, 21];

function mergeSortedArray(a, b) {
    var arr = a.concat(b).sort(function(a, b) {
        return a - b;
     });
    return arr;
 }
 console.log(mergeSortedArray(num1, num2));
 
//console.log(temp);
 
 function mergeTwo(arr1, arr2) {
	  let merged = [];
	  let index1 = 0;
	  let index2 = 0;
	  let current = 0;

	  while (current < (arr1.length + arr2.length)) {

	    let isArr1Depleted = index1 >= arr1.length;
	    let isArr2Depleted = index2 >= arr2.length;
	    console.log(index1,arr1.length,isArr1Depleted);

	    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
	      merged[current] = arr1[index1];
	      index1++;
	    } else {
	      merged[current] = arr2[index2];
	      index2++;
	    }

	    current++;
	  }

	  return merged;
	}

console.log(mergeTwo(num1, num2));


var a = [1,2,3,0,0,0];
var b = [2,5,6];

console.log(combineArrays(a, b));

function combineArrays(nums1, nums2){
var m = 3;
var n = 3;
//n1.length = 6;
//n2.length = 3;
	
    console.log(m,n,nums1.length, nums2.length);
    while (m > 0 || n > 0) {
        if (m > 0 && n > 0)
            if (nums1[m-1] > nums2[n-1]) nums1[m+n-1] = nums1[--m]; 
            else nums1[m+n-1] = nums2[--n];
        else if (n > 0) nums1[m+n-1] = nums2[--n];
        else return;
    }
}
