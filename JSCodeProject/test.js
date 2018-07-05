//function foo1()
//{
//  return {
//      bar: "hello"
//  };
//}
//
//function foo2()
//{
//  return
//  {
//      bar: "hello"
//  };
//}
//
//console.log(foo1());
//console.log(foo2());
//
//console.log(0.1 + 0.2);
//console.log(0.1 + 0.2 == 0.3);
//
//function areTheNumbersAlmostEqual(num1, num2) {
//	return Math.abs( num1 - num2 ) < Number.EPSILON;
//}
//console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

processData();

function processData() {
    //Enter your code here
    //Standard output
    //console.log(input);
//    var inpStr = input.split('\n');
    var boxes = 1024;
    var crates = 5;
    var arr = [];
    
    if(boxes%2==0){
		arr.push(boxes/2);
        arr.push(boxes/2);
    }else{
    	arr.push((boxes/2)+1);
        arr.push(boxes/2);
    }
    console.log(arr);
    while(arr[0]>crates){
    	arr.sort(sortNumber);
//        console.log(arr);
        boxes = arr[0];
        arr.shift();
        if(boxes%2==0){
            arr.push(boxes/2);
            arr.push(boxes/2);
        }else{
            arr.push((boxes/2)+1);
            arr.push(boxes/2);
        }

    }
    console.log(arr.length);
} 
                 
function sortNumber(a,b) {
    return b-a;
}

processData2();

function processData2() {
    //Enter your code here
    //Standard output
    //console.log(input);
//    var str = input.split('\n');
    var inpStr = "XXXXXyXnnnnn";
    var y_cost = 23;
    var n_cost = 44;
    var finalStr = "";
    console.log(inpStr,y_cost,n_cost);
    
    for(var i=0;i<inpStr.length;i++){
    	var t = inpStr[inpStr.length-1-i];
       // console.log("1...",t,inpStr[i]);
        if(t != 'X' && inpStr[i] == 'X'){
            //inpStr[i] = t;
            finalStr += t;
          //  console.log("2...",t,finalStr);
            if(t=='y') y_cost++;
            if(t=='n') n_cost++;
        }
        //console.log(t,inpStr[i]);
        if(t == 'X' && inpStr[i] != 'X'){
        	t == inpStr[i];
            finalStr += inpStr[i];;
          //  console.log("3...",t,finalStr);
            if(t=='y') y_cost++;
            if(t=='n') n_cost++;

        } 
        if(t == 'X' && inpStr[i] == 'X'){
			finalStr += 'y';  
            
            if(checkPalindrome(finalStr)){
            	y_cost++;
            } else{
            	finalStr += 'n'; 
                n_cost++;
            }
        }
    }
    console.log(y_cost+n_cost);
    
//    return y_cost+n_cost;
} 

function checkPalindrome(strn) {
	  return strn == strn.split('').reverse().join('');
}

var elements=[1,2,3];
var arr = [];

for(var i=0;i<elements.length;i++){
    arr.push(elements[i].toString(2));
}

console.log(arr);
