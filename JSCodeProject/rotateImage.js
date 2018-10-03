var mat = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

var rotate = function(matrix) {
    rotateCols(matrix);
    rotateEachDig(matrix);
};

function rotateCols(mat){
	for(let j=0;j<mat.length;j++){
		let low = 0;
		let ceil = mat.length-1;
		
		while(low<ceil){
			swap(mat,low,j,ceil,j);
			low++;
			ceil--;
		}
	}
}

function rotateEachDig(mat){
	for(let j=0;j<mat.length;j++){
		for(let i=j;i<mat.length;i++){
			swap(mat,i,j,j,i);
		}
	}
}

function swap(mat,i1,j1,i2,j2){
	var aux = mat[i1][j1];
	mat[i1][j1] = mat[i2][j2];
	mat[i2][j2] = aux;
}

console.log(mat);
rotate(mat);
console.log(mat);