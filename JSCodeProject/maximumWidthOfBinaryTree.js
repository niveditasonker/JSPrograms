function TreeLinkNode(val) {
     this.val = val;
     this.left = this.right = null;
}



var widthOfBinaryTree = function(root) {
  const mins = [0]
  let max = 0

  dfs(root, 0, 0)
  return max

  // depth first search
  function dfs(currentNode, depth, position) {
    if (!currentNode) return
    if (depth === mins.length) {
      mins[depth] = position
    }

    const delta = position - mins[depth];
    console.log("Node: ",currentNode.val,"Delta: ",delta,"Depth: ",depth,"Pos: ",position,"Mins: ",mins[depth],"Mins len: ",mins.length);
    max = Math.max(max, delta + 1)
    console.log("Max: ",max);
    dfs(currentNode.left, depth + 1, delta * 2)
    dfs(currentNode.right, depth + 1, delta * 2 + 1)
  }
}

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(3);
var n3 = new TreeLinkNode(2);
var n4 = new TreeLinkNode(5);
var n5 = new TreeLinkNode(3);
//var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(9);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
//n3.left = n6;
n3.right = n7;

console.log(widthOfBinaryTree(n1));
