function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/*
var n1 = new TreeNode(5);
var n2 = new TreeNode(3);
var n3 = new TreeNode(7);
var n4 = new TreeNode(3);
var n5 = new TreeNode(4);
var n6 = new TreeNode(1);
var n7 = new TreeNode(2);
var n8 = new TreeNode(2);
var n9 = new TreeNode(1);
var n10 = new TreeNode(3);
var n11 = new TreeNode(8);
var n12 = new TreeNode(7);
var n13 = new TreeNode(6);
var n14 = new TreeNode(9);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n6;
n4.right = n7;
n5.left = n8;
n8.left = n9;
n3.left = n10;
n3.right = n11;
n11.left = n12;
n11.right = n14;
n12.left = n13;
*/

var n1 = new TreeNode(4);
var n2 = new TreeNode(5);
var n3 = new TreeNode(6);
var n4 = new TreeNode(4);
var n5 = new TreeNode(1);
var n6 = new TreeNode(6);
var n7 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n4.left = n7;

n3.left = n5;
n3.right = n6;

var maxLen = 0;

function findTreePath(root){
	var final = [];
   
    search(root,[],final);
   	console.log(final);
    return final;
}

function search(node,current,final){
	if(node==null){
    	return;
    }
    
    var value = node.val;
    
    if(current.indexOf(value) == -1){
    	current.push(value);
        //console.log(current);f
        
        if(node.left == null && node.right == null){
        	var str = current;
            maxLen = Math.max(maxLen,str.length);
//            console.log("In if...."+str+" "+str.length+" maxLen: "+maxLen);
            if(str.length >= maxLen){
            	final.push(current.join('->'));
            }
           	
        }else{
			//console.log("In else "+final);
            search(node.left,current,final);
            search(node.right,current,final);
        }
        current.pop();
    }

}
console.log(findTreePath(n1), maxLen);




//  function dfs(node, curr, res) {
//      if(node === null) {
//          return;
//      }
     
//      curr.push(node.x);
     
//      if(node.l === null && node.r === null) {
//          res.push(curr.join('->'));
//      } else {
//          dfs(node.l, curr, res);
//          dfs(node.r, curr, res);
//      }
     
//      curr.pop();
//  }
 
//  dfs(T, [], res);
 
//  console.log(res);
//  var data = {};
//  for(var i=0;i<res.length;i++){
//      res[i].split('->');
//     if(data[res] != undefined){
//         data[res] = 1;
//     }
//     data[res] = 1;
//  }
 
//  console.log(res);
//  return res[1];   
 
//  var colQueue = [];
//  var nodeQueue = [];
 
//  var col = 0;
//  nodeQueue.push(T);
//  colQueue.push(col);
//  var res = [];
//  var min=0;
//  var max = 0;
 
 
//  while(nodeQueue.length){
//      var curr = nodeQueue.shift();
//      col = colQueue.shift();
     
//      result[col] = curr.x;
     
//      if(curr.l != null){
         
//      }
//  }