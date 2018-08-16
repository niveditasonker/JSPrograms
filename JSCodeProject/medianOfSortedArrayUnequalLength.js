//var num1 = [1,3,8,9,15];
//var num2 = [7,11,19,21,23,25]; // Odd case

var num1 = [1,3,8,9,14,18];
var num2 = [7,11,19,21,23,25]; //even case

function findMedian(inp1, inp2){
	if(inp1.length > inp2.length){
		return findMedian(inp2, inp1);
	}
	
	var x = inp1.length;
	var y = inp2.length;
	
	var low = 0;
	var high = x;
	
//	console.log(x,y,low,high);
	while(low <= high){
		var partitionX = Math.floor((high + low)/2);
		var partitionY = Math.floor((x+y+1)/2 - partitionX); //+1 to handle even & odd cases
		
		var maxLeftX  = (partitionX==0) ? Number.MIN_VALUE : inp1[partitionX-1];
		var minRightX = (partitionX==x) ? Number.MAX_VALUE : inp1[partitionX];
		
		var maxLeftY = (partitionY==0) ? Number.MIN_VALUE : inp2[partitionY-1];
		var minRightY = (partitionY==y) ? Number.MAX_VALUE : inp2[partitionY];
		
//		console.log(partitionX,partitionY,maxLeftX,minRightX,maxLeftY,minRightY);
		
		if(maxLeftX <= minRightY && maxLeftY <= minRightX ){
			if((x+y) % 2 ==0){
				return (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX,minRightY))/2;
			}else{
				return Math.max(maxLeftX,maxLeftY);
			}
		}else if(maxLeftX > minRightY){
			high = partitionX -1;
		}else{
			low = partitionX + 1;
		}
	}
}

console.log(findMedian(num1, num2));