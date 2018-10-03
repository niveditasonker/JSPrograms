//var inp = "UD";
var inp = "LL";

var judgeCircle = function(moves) {
    var map = {'L': 1,'R':1,'U':1,'D':1};
    var res = [];
	var x= 0;
	var y=0;
	
    for(var i=0;i<moves.length;i++){

    	if(moves.charAt(i)=='U') y += map[moves.charAt(i)];
    	if(moves.charAt(i)=='D') y -= map[moves.charAt(i)];
    	if(moves.charAt(i)=='L') x -= map[moves.charAt(i)];
    	if(moves.charAt(i)=='R') x += map[moves.charAt(i)];
    }
    
    res.push([x,y]);
    
    if(res[0][0] == 0 && res[0][1] == 0) return true;
    else return false;
};

console.log(judgeCircle(inp));