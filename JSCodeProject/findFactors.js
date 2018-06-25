function calculate(num) {
    var str = "0";
    var arr = [0];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
            arr.push(i);
        }
    }
    console.log(str);
    console.log(arr);
    
    console.log(contains(arr));
    if(contains(arr)){
    	console.log("Nice number");
    }else{
    	console.log("Not a nice number");
    }
}


function contains(arr){
	console.log(arr.indexOf(2) == 1 || arr.indexOf(3) == 1|| arr.indexOf(5) == 1);
	if(arr.indexOf(2) == 1 || arr.indexOf(3) == 1|| arr.indexOf(5) == 1){
		return 1;
	}
	return 0;
}
calculate(245);