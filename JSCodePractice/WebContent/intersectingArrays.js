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