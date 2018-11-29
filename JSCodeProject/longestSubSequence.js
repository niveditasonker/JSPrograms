var arr = [1, 9, 3, 10, 4, 20, 2];

console.log(findSubseq(arr));

function findSubseq(arr){
	var data = {};
	var ans=0;
	
	for(var i=0; i<arr.length;++i){
		if(data[arr[i]] == undefined){
			data[arr[i]] = 1;
		}
	}
	console.log(data);
	for(var i=0; i<arr.length;++i){
//		if(data[arr[i]-1] != undefined){
//		console.log(!([arr[i]-1] in data), arr[i]);
		if(!([arr[i]-1] in data)){
			var j = arr[i];
			while(j in data){
//				console.log("in data...",j);
				j++;
			}
//			console.log(ans,j,arr[i]);
			if(ans<j-arr[i]){
				ans = j-arr[i];
			}
			console.log(ans);
		}
	}
	
	return ans;
}