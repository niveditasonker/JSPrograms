var zigzagOrder = function(matrix) {
    if (matrix.length === 0) return [];
    var result = [];
    var anti = [];

    var evenRow = 0;
    var oddRow = 1;
    var row = matrix.length-1;
    var col = matrix[0].length-1;

    while(evenRow<row){
    	for(let i=0;i<col;i++){
    		result.push(matrix[evenRow][i])
    	}
    	evenRow = evenRow + 2;
    	
    	if(oddRow<row){
        	for(let i=col-1;i>=0;i--){
        		result.push(matrix[oddRow][i]);
        	}
    	}
    	
    	oddRow = oddRow + 2;
    }
    
    return result;



};

var mat = [  [1,2, 3,4],
        [5, 6,7,8],
        [9,10,11,12],
        [13,14,15,16]
];

console.log(zigzagOrder(mat));