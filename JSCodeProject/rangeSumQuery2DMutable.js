/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.rowLen = matrix.length;
    this.colLen = this.rowLen === 0 ? 0 : matrix[0].length;
    this.colSum = []; // colSum[i][j] means column sum from matrix[0][j] to matrix[i][j]
    
    for (let i = 0; i < this.rowLen; i++) {
        this.colSum.push(new Array(this.colLen).fill(0));
    }
    
    for (let i = 0; i < this.rowLen; i++) {
        for (let j = 0; j < this.colLen; j++) {
            if (i === 0) {
                this.colSum[i][j] = this.matrix[i][j];
            } else {
                this.colSum[i][j] = this.matrix[i][j] + this.colSum[i - 1][j];
            }
        }
    }    
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    for (let i = row; i < this.rowLen; i++) {
        this.colSum[i][col] += val - this.matrix[row][col];
    }
    
    this.matrix[row][col] = val;    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let result = 0;
    
    for (let i = col1; i <= col2; i++) {
        if (row1 === 0) {
            result += this.colSum[row2][i];
        } else {
            result += this.colSum[row2][i] - this.colSum[row1 - 1][i];
        }
    }
    
    return result;    
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */