var tree = {
  val: 5,
  left: {
    val: 2, left: null, right: null
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
};

function inorderReverse(node, cb) {
  if (node.right !== null) inorderReverse(node.right, cb);
  cb(node);
  if (node.left  !== null) inorderReverse(node.left,  cb);  
}

// Find the kth largest element
var k = 2;
var count = 1;
inorderReverse(tree, function(node) {
  if (count++ === k) console.log(node.val);
});

