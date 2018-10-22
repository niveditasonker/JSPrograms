//var matrix = [ [1,1,1,1,0],
//			   [1,1,0,1,0],
//			   [1,1,0,0,0],
//			   [0,0,0,0,0] ];
//
//var icount = findIslands(matrix);
//console.log(icount);
//
//function findIslands(mat){
//	if(mat==null || mat.length==0 || mat[0].length==0){
//		return 0;
//	}
//	var n = mat.length;
//	var m = mat[0].length;
//
//	var count = 0;
//	for(var i=0;i<n;i++){
//		for(var j=0;j<m;j++){
//			
//			if(mat[i][j]=='1'){
//				count++;
//				merge(mat,i,j);
//			}
//		}
//	}
//	return count;
//}
//
//function merge(arr, i,j){
//	var n = arr.length;
//	var m = arr[0].length;
//
//	if(i<0||j<0||i>=n||j>=m||arr[i][j] !='1'){
//		return;
//	}
//	
//	arr[i][j]='X';
//	
//	merge(arr,i-1,j);
//	merge(arr,i+1,j);
//	merge(arr,i,j=1);
//	merge(arr,i,j+1);
//}


var matrix1 = [ [1,1,1,1,0],
	   [1,1,0,1,0],
	   [1,1,0,0,0],
	   [0,0,0,0,0] ];
//var matrix1 = [ [1,0,0,1,1,1,0],
//	[1,0,1,1,0,0,1],
//	[1,0,0,1,1,0,1],
//	[1,1,1,1,1,1,1],
//	[1,0,0,0,0,0,1 ]];

console.log(findIsl(matrix1));

function findIsl(grid){
	if(grid==null || grid.length==0||grid[0].length==0)
        return 0;
 
    var m = grid.length;
    var n = grid[0].length;
 
    var count=0;
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            if(grid[i][j]=='1'){
                count++;
                merge1(grid, i, j);
            }
        }
    }
 
    return count;
}

function  merge1(grid, i, j){
	   var m=grid.length;
	   var n=grid[0].length;
	 
	    if(i<0||i>=m||j<0||j>=n||grid[i][j]!='1')
	        return;
	 
	    grid[i][j]='X';
	 
	    merge1(grid, i-1, j);
	    merge1(grid, i+1, j);
	    merge1(grid, i, j-1);
	    merge1(grid, i, j+1);
}