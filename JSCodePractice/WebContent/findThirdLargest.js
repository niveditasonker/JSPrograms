var arr = [13,14, 45, 66, 38, 22];

var first = arr[0];
var sec = Number.MIN_SAFE_INTEGER - 1;
var third = Number.MIN_SAFE_INTEGER - 1;

for(var i=0; i< arr.length;i++){
	
	if(arr[i] > first){
		third = sec;
		sec = first;
		first = arr[i];
	}else if(arr[i] > sec){
		third = sec;
		sec = arr[i];
	}else if(arr[i] > third){
		third= arr[i];
		
	}
	
}
console.log(first,sec,third);