function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

//function Node(val) {
//    this.val = val;
//    this.next = null;
//    this.prev = null;
//}

var flatten = function(root) {
    var stack = [];
    var p = root;

    while(p !== null || stack.length !== 0){
        if(p.right  !== null){
            stack.push(p.right);
        }

        if(p.left !== null){ // [!!!]point of confusing, if null then pop stack
            p.right = p.left;
            p.left = null;
        } else if(stack.length !== 0){
            var node = stack.pop();
            p.right = node;
        }

        p = p.right;
        console.log(p);
    }
    return p;
    
};

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(6);


//console.log(flatten(tree));
flatten(tree);
//console.log(tree);