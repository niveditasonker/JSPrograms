function TreeLinkNode(val) {
     this.val = val;
     this.left = this.right = null;
}

function TreeColumnNode(col, node) {
    this.col = col;
    this.treeNode = node;
}

var verticalOrder = function(root) {
	var res = [];
	
	if(root===null){
		return res;
	}
	
	var hash={};
	var queue=[];
	queue.push([root,0]);
	
	var min = Infinity;
	var max = -Infinity;
	
//	console.log(queue);
	while(queue.length){
		var len = queue.length;
		console.log(len);
		for(var i=0;i<len;i++){
			var pair = queue.shift();
//			console.log("Pair: ", pair);
			var node = pair[0];
			var order = pair[1];
			console.log("....",pair[0]);
			console.log("=======",pair[1]);
			
			hash[order] = hash[order] || [];
			hash[order].push(node.val);
			
			min = Math.min(order,min);
			max = Math.max(order,max);
			
			if(node.left){
				queue.push([node.left, order-1]);
			}
			
			if(node.right){
				queue.push([node.right, order+1]);
			}
			
			console.log("Q: ", queue);
		}
	}
	
	while(min <= max){
		if(hash[min].length){
			res.push(hash[min]);
		}
		min++;
	}
	
	return res;
	
}

var verticalOrder2 = function(root) {
    let col = 0;
    let node = root;
    let queue = [];
    let result = [];
    let map = {};
    let min = 0;
    let max = 0;
    
    if (!node) {
        return result;
    }
    
    queue.push([0, root]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        var nvalue = node[1];
		var order = node[0];
//		console.log(order, nvalue);
        if (map[order] === undefined) {
            map[order] = [];
        }
        
        map[order].push(nvalue);
        
        if (node.left) {
            queue.push(order - 1, node.left);
            min = Math.min(min, order - 1);
        }
        
        if (node.right) {
            queue.push(order + 1, node.right);
            max = Math.max(max, order + 1);
        }
    }
//    console.log(map);
    
    for (let i = min; i <= max; i++) {
    	console.log(map[i]);
        result.push(map[i].val);
    }
    
    return result;
};

var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(verticalOrder(n1));
//console.log(verticalOrder2(n1));