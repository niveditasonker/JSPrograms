var str = ['(', ')', '{', '}', '[',']'];
console.log(str);

var map = {
		"(" : 1,
		"[" : 2,
		"{" : 3,
		")" : -1,
		"]" : -2,
		"}" : -3,
};

var stack=[];
//validParentheses(str);

//for(var i=0;i<str.length;i++){
//	if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
//		stack.push(str[i]);
//	}
//	if(str[i] == ')' || str[i] == ']' || str[i] == '}'){
//		if(matchinPair(str[str.length-1],str[i])){
//			stack.splice(stack.indexOf(str[i]));
////			stack.pop(str[str.length-1]);
//		}
//	}
//	
//}
//console.log(stack);
//if(stack.length == 0){
//	console.log("Balanced");
//}else{
//	console.log("Unbalanced");
//}
//
//
//function matchinPair(ch1,ch2){
//	if(ch1 == '(' && ch2 == ')'){
//		return true;
//	}else if(ch1 == '[' && ch2 == ']'){
//		return true;
//	}else if(ch1 == '{' && ch2 == '}'){
//		return true;
//	}
//	return false;
//
//}

//function validParentheses(parens){
//    
//	  var length = parens.length / 2;
//	  
//	  for (var i = 0; i <= length; ++i) {
//	    parens = parens.replace('()', '');
//	  }
//	  
//	  return parens == '';
//
//	}

function isValid(s) {
    var map = [];
    map['('] = ')';
    map['['] = ']';
    map['{'] = '}';
 
    var stack = [];
 
    for (var i = 0; i < s.length; i++) {
        var curr = s.charAt(i);
 
        if (map[curr]!=null) {
            stack.push(curr);
//            console.log(stack);
        } else if (checkValue(map,curr)) {
            if (!stack.length == 0 && map[stack[stack.length-1]] == curr) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
 
    return stack.length == 0;
}

function checkValue(map, val) {
    for(var i in map) {
        if(map[i] == val) {
            return true;
        }
    }
    return false;
}

console.log(isValid('{{}[()]}'));
console.log(isValid('{{}[]]'));