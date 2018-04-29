//var matrix = [
//	 [ 1, 2, 3 ],
//	 [ 4, 5, 6 ],
//	 [ 7, 8, 9 ]
//	];

var matrix = [[1,  2,  3,  4,  5,  6],
        [7,  8,  9,  10, 11, 12],
        [13, 14, 15, 16, 17, 18]
      ];
printMat(matrix);

function printMat(mat){
	var srow = 0; 
	var erow = mat.length; 
	var scol = 0; 
	var ecol = mat[0].length; 
//	console.log(srow,erow,scol,ecol);
	var str= "";
	while(srow < erow && scol < ecol){
		for(var i=scol;i<ecol;++i){
			str += mat[srow][i]+" ";
		}
		srow++;
		
//		console.log(str);
		
		for(var i=srow;i<erow;i++){
			str += mat[i][ecol-1]+" ";
		}
		ecol--;
//		console.log(str);
		
		if ( srow < erow){
			for(var i=ecol-1;i>=1;i--){
				str += mat[erow-1][i]+" ";
			}	
			
			erow--;
		}
//		console.log(str);
		
		if(scol < ecol){
			for(var i=erow-1;i>srow;i--){
				str += mat[i][scol]+" ";
			}
			scol++;
		}

	}
	
	console.log(str);
}