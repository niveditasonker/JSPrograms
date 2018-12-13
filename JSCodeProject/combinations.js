var n = 4;
var k=2;

//var nums = [1,1,2];

var combine = function(n,k) {
    var res = [];
    var visited = [];
    
    generate(n,1,[],res,k);
    return res;
};

function generate(n,idx,output,res,k){
	if(k==0){
		res.push(output.slice());
		return;
	}
	
	for(let i=idx;i<=n;i++){
		output.push(i);
		generate(n,i+1,output,res,k-1);
		output.pop();
	}
}

console.log(combine(4,2));