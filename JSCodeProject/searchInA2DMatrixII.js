var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    var i = 0,
        j = matrix[0].length - 1;

    while ((i<= matrix.length-1) && j>=0) {
        if (matrix[i][j] === target) {
            return true;
        }

        if (matrix[i][j] < target) {
            i++;
        }
        else if (matrix[i][j] > target) {
            j--;
        }
    }

    return false;

};

var mat = [
	  [1,   4,  7, 11, 15],
	  [2,   5,  8, 12, 19],
	  [3,   6,  9, 16, 22],
	  [10, 13, 14, 17, 24],
	  [18, 21, 23, 26, 30]
	];

console.log(searchMatrix(mat,16));
console.log(searchMatrix(mat,20));
