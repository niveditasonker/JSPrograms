var antiSpiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    var result = [];
    var anti = [];

    var left = 0;
    var top = 0;
    var bottom = matrix.length-1;
    var right = matrix[0].length-1;


    while (left < right && top < bottom) {
        var i,j;
        for (j=left; j<right; j++) result.push(matrix[top][j]);
        for (i=top; i<bottom; i++) result.push(matrix[i][right]);
        for (j=right; j>left; j--) result.push(matrix[bottom][j]);
        for (i=bottom; i>top; i--) result.push(matrix[i][left]);
        left++;
        right--;
        top++;
        bottom--;
    }

    if (left === right) {
        for (i=top; i<=bottom; i++) result.push(matrix[i][left]);
    }
    else if (top === bottom) {
        for (j=left; j<=right; j++) result.push(matrix[top][j]);
    }

    for(var k =result.length-1;k>=0;k--){
    	anti.push(result[k]);
    }
    return anti;

};

var mat = [  [1,2, 3,4],
        [5, 6,7,8],
        [9,10,11,12],
        [13,14,15,16]
];

console.log(antiSpiralOrder(mat));