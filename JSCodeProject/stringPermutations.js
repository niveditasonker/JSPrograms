var str = "abc";

console.log(findPermutations(str));
function findPermutations(s){
	var res = [];
	var visited = [];
	var newStr = "";
	
	generatePerms(s,0,visited,[],res,newStr);
	return res;
}

function generatePerms(s,pos,visited,output,result,ns){

//	if(s.length == ns.length){
	if(s.length == output.length){
//		console.log(output.slice());
		result.push(output.join(""));
//		result.push(ns.slice());
		return;
	}
	
	
	for(var i=0;i<s.length;i++){
		if(!visited[i]){
			visited[i] = true;
			ns += s.charAt(i);
			output.push(s.charAt(i));
			generatePerms(s,pos+1,visited,output,result);
//			generatePerms(s,pos+1,visited,output,result,ns);
//			ns.slice(-1);
			output.pop();
			visited[i] = false;
		}
	}
}