var board =
	[
		  ['A','B','C','E'],
		  ['S','F','C','S'],
		  ['A','D','E','E']
		];
var word = "ABCCED";

var exist = function(board, word) {
	var row = board.length;
    var col = board[0].length;
    // BFS
    var i, j;
    var visited = [];
    for (i=0; i<row; i++) {
        visited.push([]);
        for (j=0; j<col; j++) {
            visited[i].push(false);
        }
    }
    var result = [];

    for (i=0; i<row; i++) {
        for (j=0; j<col; j++) {
            if (DFS(word, 0, i, j, visited)) return true;
        }
    }

    return false;
    
    function DFS(word, k, i, j, visited) {
//        console.log(visited, "\n");
        if (k === word.length) return true;
        if (i === row || i === -1 || j === col || j === -1 || visited[i][j] === true || board[i][j] !== word[k]) return false;
        visited[i][j] = true;
        var res = DFS(word, k+1, i+1, j, visited) ||
            DFS(word, k+1, i-1, j, visited) ||
            DFS(word, k+1, i, j+1, visited) ||
            DFS(word, k+1, i, j-1, visited);
        visited[i][j] = false;
        return res;
    }
};

console.log(exist(board,word));






//var mat = ["GEEKSFORGEEKS",
//    "GEEKSQUIZGEEK",
//    "IDEQAPRACTICE"];
//
//var word = "GEEKS";
//var xdir = [-1, -1, -1, 0, 0, 1, 1, 1 ];
//var ydir = [-1, 0, 1, -1, 1, -1, 0, 1];
//
//function patternSearch(grid, wrd){
//	if(wrd==null) return;
//	
//	for(let i=0;i<grid.length;i++){
//		for(let j=0;j<grid[0].length;j++){
//			if(search2D(grid,i,j,wrd)){
//				console.log("here");
//				return true;
//			}
//		}
//	}
//}
//
//function search2D(grid, row, col,word){
//	
//	if(grid[row][col] != word[0]) return false;
//	
//	var len = word.length;
//	console.log(len);
//	for(let d=0;d<8;d++){
//		let k, rd=row+xdir[d], cd=col+ydir[d];
//		for (k = 1; k < len; k++) {
//			if(rd>=grid.length || cd >=grid[0].length || rd<0||cd<0){
//				break;
//			}
//			
//			if(grid[rd][cd] != word) break;
//			
//			rd += xdir[d], cd += ydir[d]; 
//		}
//		if(k==len) return true;
//	}
//	
//	return false; 
//}
//
//console.log(patternSearch(mat, word));