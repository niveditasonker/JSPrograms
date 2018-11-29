var matrix = [  [1,2,0,4],
        [5, 6,7,8],
        [9,0,11,12],
        [13,14,15,16]
];

var setZeroMatrix = function(mat){
	var isRowZero = false, isColZero = false;
	console.log(mat[0].length);
	
	var colLen = mat[0].length;
	
	for(let i=0;i<mat[0].length;i++){ //check if 1st row is zero
		if(mat[0][i] == 0){
			isRowZero = true;
			break;
		}
	}
	
	for(let i=0;i<mat.length;i++){ //check if 1st col is zero
		if(mat[i][0] == 0){
			isColZero = true;
			break;
		}
	}
	
	console.log(isRowZero,isColZero);
	
	for(var i=1;i<mat.length;i++){ //check rest array for 0
		for(var j=1;j<mat[0].length;j++){
//			console.log(i,j);
			if(mat[i][j]==0){
				mat[i][0] = 0;
				mat[0][j] = 0;
			}
		}
	}
	
	console.log("completed...");
	
	for(let i=1;i<mat.length;i++){ //set 1st row to 0
		if(mat[i][0]==0) nullifyRow(mat,i);
	}
	console.log("row nullified...");
	
	for(let i=1;i<mat[0].length;i++){ // //set 1st col to 0
		if(mat[0][i]==0) nullifyCol(mat,i);
	}
	
	console.log("col nullified...");
	
	if(isRowZero) nullifyRow(mat,0); //set 1st row & col to 0
	if(isColZero) nullifyCol(mat,0);
	
	return mat;
}

function nullifyRow(mat,rc){
	for(let i=0;i<mat[0].length;i++){
		mat[rc][i] = 0;
	}
}

function nullifyCol(mat,rc){
	for(let i=0;i<mat.length;i++){
		mat[i][rc] = 0;
	}	
}

console.log(matrix);
console.log(setZeroMatrix(matrix));