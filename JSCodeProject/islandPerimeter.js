//var matrix = [ [0, 1, 0, 0, 0], 
//			[1, 1, 1, 0, 0], 
//			[1, 0, 0, 0, 0] ];

var matrix = [[0,1,0,0],
	 [1,1,1,0],
	 [0,1,0,0],
	 [1,1,0,0]];

var row = matrix.length;
var col = matrix[0].length;

console.log(calcPerimeter(matrix));

function calcPerimeter(mat){
	var perimeter = 0;
	for(var i=0;i<row;i++){
		for(var j=0;j<col;j++){
			if(mat[i][j] == 1){
				perimeter += (4 - findNeighbour(mat,i,j));
			}
			
		}
	}
	return perimeter;
}

function findNeighbour(mat, i ,j){
	var count = 0;

	if(i>0 && mat[i-1][j] == 1){
		count++;
	}
	if(j>0 && mat[i][j-1] == 1){
		count++;
	}
	if(i<row-1 && mat[i+1][j] ==1){
		count++;
	}
	if(j<col-1 && mat[i][j+1] == 1){
		count++;
	}
	return count;
	
}