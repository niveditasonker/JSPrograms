var mat = [
	  ["5","3",".",".","7",".",".",".","."],
	  ["6",".",".","1","9","5",".",".","."],
	  [".","9","8",".",".",".",".","6","."],
	  ["8",".",".",".","6",".",".",".","3"],
	  ["4",".",".","8",".","3",".",".","1"],
	  ["7",".",".",".","2",".",".",".","6"],
	  [".","6",".",".",".",".","2","8","."],
	  [".",".",".","4","1","9",".",".","5"],
	  [".",".",".",".","8",".",".","7","9"]
	];

var isValidSudoku = function(board) {
    
	//col
    for(let i=0;i<board.length;i++){
    	var duplicatesCheck = [];
    	for(let j=0;j<board[0].length;j++){
    		if(board[i][j] != '.' && duplicatesCheck[board[i][j]]){
    			return false;
    		}else{
    			duplicatesCheck[board[i][j]] = true;
    		}
    	}
    }
    
    //row
    for(let i=0;i<board.length;i++){
    	var duplicatesCheck = [];
    	for(let j=0;j<board[0].length;j++){
    		if(board[j][i] != '.' && duplicatesCheck[board[j][i]]){
    			return false;
    		}else{
    			duplicatesCheck[board[j][i]] = true;
    		}
    	}
    }
    
    for(let i=0;i<board.length;i+=3){
    	
    	for(let j=0;j<board.length;j+=3){
    		var duplicatesCheck = [];
    		for(let x=0;x<3;x++){
    			for(let y=0;y<3;y++){
    				if(board[i+x][j+y] != '.' && duplicatesCheck[board[i+x][j+y]])
    					return false;
    				else{
    					duplicatesCheck[board[i+x][j+y]] = true;
    				}
    			}
    		}
    	}
    }
    
    return true;

};

console.log(isValidSudoku(mat));