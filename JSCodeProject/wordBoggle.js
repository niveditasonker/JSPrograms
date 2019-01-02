var dict = ["GEEKS", "FOR", "QUIZ", "GO"];
var boggle = [['G','I','Z'],
			  ['U','E','K'],
			  ['Q','S','E']];

var findAjLetters = function(mat, i, j, str, visited,res){
	visited[i][j] = true;
//	console.log(i,j);
	str += mat[i][j];
	
	if(dict.includes(str)){
		res.push(str);
	}
	
	for(let row=i-1; row<=i+1 && row < mat.length; row++){
		for(let col=j-1; col<=j+1 && j<mat[i].length; col++){
			if(row>=0 && col >=0 && !visited[row][col]){
				findAjLetters(mat, row, col, str, visited,res);
			}
			
		}
	}
	
	str = "";
	visited[i][j] = false;
}

var findWords = function(boggle){
	var visited = [];
	var str = "";
	var res = [];
	
	for(let i=0;i<boggle.length;i++){
		var temp = Array(boggle[i].length).fill(false);
		visited.push(temp);
	}
//	console.log(visited);
	
	for(let i=0;i<boggle.length;i++){
		for(let j=0;j<boggle[i].length;j++){
			findAjLetters(boggle,i,j,str,visited, res);
		}
	}
	
	return res;
}

console.log(findWords(boggle));