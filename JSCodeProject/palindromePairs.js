var input = ["abcd","dcba","lls","s","sssll"];

function isPalindrome(str){
	var start = 0;
	var end = str.length -1;
	
	while(start<end){
		if(str.charAt(start) !== str.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	
	return true;
}

var palindromePairs = function(words) {
	console.log("words: "+words);
	var map = {};
	var res = new Set();
	var s1;
	var s2;
	var final = [];
	
    if(!words || words.length == 0){
    	return final;
    }
    
    for(var i=0;i<words.length;i++){
    	map[words[i]] = i;
    }
    
    for(var i=0;i<words.length;i++){
    	for(var j=0;j<=words[i].length;j++){
    		s1 = words[i].substring(0,j);
    		s2 = words[i].substring(j,words[i].length);
    		
    		if(isPalindrome(s1)){
    			s2 = s2.split('').reverse().join('');
    			
    			if((s2 in map) && map[s2] != i){
    				var temp=[];
    				temp.push(map[s2]);
    				temp.push(i);
    				res.add(temp.toString());
    			}
    		}
    		
    		if(isPalindrome(s2)){
    			s1 = s1.split("").reverse().join("");
    			
    			if((s1 in map) && map[s1] != i){
    				var temp=[];
    				temp.push(map[s1]);
    				temp.push(i);
    				res.add(temp.toString());
    			}
    		}
    	}
    }
    
    
    res.forEach(function(item){
//    	console.log(item);
    	var temp = item.split(',');
    	temp[0] = parseInt(temp[0]);
    	temp[1] = parseInt(temp[1]);
    	final.push(temp);
    });
    
    return final;
};

function isPalindrome2(str){
    if (str.length < 2) {
        return true;
    };	
	var start = 0;
	var end = str.length -1;
	
	while(start<end){
		if(str[start] !== str[end]){
			return false;
		}
		start++;
		end--;
	}
	
	return true;
}


var palindromePairs2 = function(words) {
	var output = [];
	if(!words || words.length ==0){
		return output;
	}
	var visited = new Array(words.length).fill(0);
	helper(words,[],output,visited);
	
	return output;
}

function helper(arr,temp,output,visited){
	if(temp.length == 2){
		var tempStr = arr[temp[0]]+arr[temp[1]];
		if(isPalindrome2(tempStr)){
			output.push([...temp]);
		}
		return;
	}
	
	for(var i=0;i<arr.length;i++){
		if(!visited[i]){
			visited[i] = 1;
			temp.push(i);
			helper(arr,temp,output,visited);
			temp.pop();
			visited[i] = 0;
		}
	}
}


console.log(palindromePairs(input)); //48ms;
console.log(palindromePairs2(input));