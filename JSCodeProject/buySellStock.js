var arr = [7, 1, 5, 3, 6, 4];
//var arr = [7, 6, 4, 3, 1];
//var arr = [4, 3, 6, 8, 2];

getProfit(arr);


function getProfit(a){
	var min = a[0];
//    var diff;
    var max_diff = 0;
    
	for(var i=0;i<a.length;i++){
    	if(a[i]<min){
        	min = a[i];
        }
    	var diff = a[i]-min;
        //alert(diff,i);
        if(max_diff < diff){
        	max_diff = diff;
        }
    }
    
    console.log(max_diff);
}