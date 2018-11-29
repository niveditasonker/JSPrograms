//var input = "()())()";
var input = "(a))";
//var input = "))a((";

var removeInvalidParentheses = function(s) {
    var queue = [];
    queue.push(s);
    
    
    var visited = {};
    var found = false;
    var res = [];
    
    while(queue.length>0){
    	s = queue.shift();
    	console.log("s:", s);
    	if(isValid(s)){
    		console.log("valid: "+s);
    		res.push(s);
    		found = true;
    	}
//    	console.log("Res: "+res);
    	if(found){
    		console.log("found: "+s);
    	
    		continue;
    	}
    	
    	for(var i=0;i<s.length;i++){
    		if(s[i]!='('&& s[i] != ')'){
    			console.log("i: ",i, s[i]);
    		
    			continue;
    		}
    		
    		
    		var newS = s.substring(0,i)+s.substring(i+1);
    		console.log(i, "Substr: ",s.substring(0,i), "2...",s.substring(i+1), "newS: "+newS);
//    		console.log("newS: "+i, s[i],newS);
//    		console.log(visited[newS]);
    		if(!visited[newS]){
    			visited[newS] = true;
    			queue.push(newS);
    		}
    	}
    }
    
    return res;
};


function isValid(str){
	var c = 0;
	
	for(var i=0;i<str.length;i++){
		if(str[i]=='(' ){
			c++;
		}else if(str[i]==')'){
			c--;
		}
		if(c<0){
			return false;
		}
	}
	

	
	return c==0;
}

console.log(removeInvalidParentheses(input));
