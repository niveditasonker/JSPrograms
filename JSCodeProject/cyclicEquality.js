var arr1 = [1, 2, 5, 4, 0];
var arr2 = [2, 4, 5, 0, 1];

console.log(isCyclic(arr1, arr2));
function isCyclic(arr1, arr2){
	arr1.sort(function(a,b){
		return a -b;
	});

	arr2.sort(function(a,b){
		return a -b;
	});

	console.log(arr1);
	console.log(arr2);

	for(var i=0; i<arr1.length; i++){
		if(arr1[i] != arr2[i]){
			return false;
//			console.log("Not cyclic");
//			break;
		}
	}
//	console.log("cyclic");	
	return true;
}
