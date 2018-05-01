//var chk_str = "ABDEFGABEF";
var chk_str = "geekforgeeks";
var no_of_chars = 256;
var len  = findLongestSeq(chk_str);
console.log(len);

function findLongestSeq(str){
	var prev_idx;
	var curr_len = 1;
	var max_len =1;
	var visited = [];
	
	for(var i=0;i<no_of_chars;i++){
		visited[i] = -1;
	}
	visited[str.charAt(0)] = 0;
	
	for(var i=1;i<str.length;i++){
		prev_idx = visited[str.charAt(i)];
		
		if(prev_idx == -1 || i-curr_len > prev_idx){
			curr_len++;
		}else{
			if(curr_len > max_len){
				max_len = curr_len;
			}
			curr_len = i-prev_idx;
		}
		visited[str.charAt(i)] = i;
	}
	if(curr_len > max_len){
		max_len = curr_len;
	}
	return max_len;
}