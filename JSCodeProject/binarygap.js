var num = 5;

var binaryGap = function(N) {
//    var max = 0;
//    var d = -32;
//    
//    while(N>0){
//    	if(N%2==1){
//	    	max = Math.max(max,d);
//	    	d = 0;
//    	}
//    	N/=2;
//    	d++;
//    }
//    
//    return max;
    
    if(N==0)
		return 0;
	var max=0;
	var index=-1;
	var count=0;
	while(N!=0)
	{
		if((N&1)==1)
		{
			if(index==-1)
				index=count;
			else
			{
				max=Math.max(max,count-index);
				index=count;
			}
		}
		N>>=1;
		count++;
	}
	return max;
};

//https://leetcode.com/problems/binary-gap/discuss/151135/java-solution-using-hashmap
console.log(binaryGap(num));