var A  = [
	  [ 1, 0, 0],
	  [-1, 0, 3]
	];

var B = [
	  [ 7, 0, 0 ],
	  [ 0, 0, 0 ],
	  [ 0, 0, 1 ]
	];

var multiply = function(A, B) {
   var res = [];
   
   var rowALen = A.length;
   var colALen = A[0].length;
   
   var rowBLen = B.length;
   var colBLen  = B[0].length;
   
   
   for(var i=0;i<rowALen;i++){
	   res.push(Array(colBLen).fill(0));
   }
   for(var i=0;i<rowALen;i++){
	   for(var k=0;k<colALen;k++){
	   
		   if(A[i][k] != 0){
			   for(var j=0;j<colBLen;j++){
				   if(B[k][j] !== 0) {
					   res[i][j] += A[i][k] * B[i][k];
				   }
			   }
		   }
	   }
   }
   
   return res;
};

console.log(multiply(A,B));