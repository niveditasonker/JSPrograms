var gameOfLife = function(board) {
	if (board == null || board.length == 0) return;
    var m = board.length, n = board[0].length;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var lives = liveNeighbors(board, m, n, i, j);

            // In the beginning, every 2nd bit is 0;
            // So we only need to care about when will the 2nd bit become 1.
            if (board[i][j] == 1 && lives >= 2 && lives <= 3) {  
                board[i][j] = 3; // Make the 2nd bit 1: 01 ---> 11
            }
            if (board[i][j] == 0 && lives == 3) {
                board[i][j] = 2; // Make the 2nd bit 1: 00 ---> 10
            }
        }
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            board[i][j] >>= 1;  // Get the 2nd state.
        }
    }
    console.log(board);
};

function liveNeighbors(board,m,n,i,j){
	var lives = 0;
    for (var x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
        for (var y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
            lives += board[x][y] & 1;
        }
    }
    lives -= board[i][j] & 1;
    return lives;
}

var inp = [
	  [0,1,0],
	  [0,0,1],
	  [1,1,1],
	  [0,0,0]
	];

gameOfLife(inp);