var str = "ababcbacadefegdehijhklij";


var partitionLabels = function(s) {
    var index = [];
    var maxIdx = -1;
    var res =[];
    
    
    for(let i=0;i<s.length;i++){
    	var curr = -1;
    	maxIdx = Math.max(maxIdx,curr=s.indexOf(s[i],i+1));
//    	console.log(curr,maxIdx);
    	
    	if(curr<0 && i>=maxIdx){
    		index.push(i);
    	}
    }
    console.log(index);
    
    for(let i=0;i<index.length;i++){
    	if(i==0) res.push(index[i]+1);
    	else res.push(index[i]-index[i-1]);
    }
    return res;
};

console.log(partitionLabels(str));
