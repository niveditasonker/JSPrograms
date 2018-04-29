var numArr = [];
numArr.push(1);
numArr.push(10);
numArr.push(12);
numArr.push(4);

var period = 3;
calMovingAvg(numArr, period);
avgOfNum(numArr);

function calMovingAvg(numArr, p){
	var nums = numArr.slice();
	var sum=0;

	if(nums.length > p){
		nums.shift();
	}

	for(var i=0; i<p; i++){
		if(nums[i] == undefined){
			nums.push(0);
		}
		sum += nums[i];
	}

	var ma = sum/p;
	console.log(ma);
}

function avgOfNum(nums){
	var len = nums.length;
	var sum = 0;
	for(var i=0;i<nums.length;i++){
		sum += nums[i];
	}
	
	var avg = sum/len;
	console.log(avg);
}

console.log(numArr);