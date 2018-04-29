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
