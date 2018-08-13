
function TreeNode(left, value, right) {
  this.left = left;
  this.value = value;
  this.right = right;
}

function ListNode(prev, value, next) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}

function LinkedList(head, tail) {
  if (tail === undefined) tail = head;
  this.head = head;
  this.tail = tail;
}
LinkedList.prototype.addToStart = function(list) {
	console.log(list);
  this.head.prev = list.tail;
  list.tail.next = this.head;
  this.head = list.head;
}
LinkedList.prototype.addToEnd = function(list) {
	console.log("End: ",list);
  this.tail.next = list.head;
  list.head.prev = this.tail;
  this.tail = list.tail;
};

function bstToLL(tree) {
  var centerNode = new ListNode(null, tree.value, null);
  var list = new LinkedList(centerNode);
  console.log(list);
  if (tree.left){
//	  console.log("In if...left", tree.left);
	  list.addToStart(bstToLL(tree.left))
  };
  if (tree.right){
//	  console.log("In if...right", tree.right);
	  list.addToEnd(bstToLL(tree.right));
  }
  return list;
}

var tree = new TreeNode(
  new TreeNode(
    new TreeNode(null, 1, null),
    2,
    new TreeNode(null, 3, null)
  ),
  4,
  new TreeNode(null, 5, null)
);
var linkedList = bstToLL(tree);
for (var node = linkedList.head; node; node = node.next) console.log(node.value);