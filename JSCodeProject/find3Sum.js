var nums = [-1, 0, 1, 2, -1, -4];

console.log(findTriplets(nums));
function findTriplets(n){
//	var n = num.sort(sortNumber);
	n.sort(function(a,b){return a>b ? 1 : -1;});
//	console.log(n);
	var sum = 0;
	var arr = [];
	for(var i=0; i<n.length-2; i++){
//		console.log(i,n[i],n[i-1]);
		if(i==0 || n[i]>n[i-1]){
			var target = 0 - n[i];
			var j = i+1;
			var k = n.length-1;
			
			while(j<k){
				
				if(n[j]+n[k] == target){
					console.log("In if:",i,j,k,n[i],n[i-1], n[j], n[k],target);
					arr.push([n[i],n[j],n[k]]);
					console.log(arr);
					j++;
					k--;
					
					while(j<k && n[j]==n[j-1]){
						j++;
					}
					while(j<k && n[k]==n[k+1]){
						k--;
					}
						
				}else if(n[i]+n[j]+n[k] <0){
					console.log("In else if:",i,j,k,n[i],n[i-1], n[j], n[k],target);
					j++;
				}else{
					console.log("In else:",i,j,k,n[i],n[i-1], n[j], n[k],target);
					k--;
				}
			}
			
			
		}
	}
	return arr;
}

function sortNumber(a,b) {
    return a - b;
}

//complexity: O(nlogn);