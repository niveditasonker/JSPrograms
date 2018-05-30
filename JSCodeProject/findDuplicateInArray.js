var nums = [1,3,4,2,2,4];

findDuplicate(nums);

function findDuplicate(num){
	for(var i=0;i<num.length;i++){
		if(num[Math.abs(num[i])]>=0){
			num[Math.abs(num[i])] = -num[Math.abs(num[i])];
		}else{
			console.log(Math.abs(num[i]) + " ");
		}
	}
}