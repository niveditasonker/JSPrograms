class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insertNode(val) {
    var node = {
      data: val,
      left: null,
      right: null
    };

    var currentNode;

    if (!this.root) {
      this.root = node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (val < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
          break;
        }
      }
    }
  }
}

function BinarySearchTree() {
	  this.root = null;
	}

	BinarySearchTree.prototype.createMinHeightBST = function (sortedrArr) {

	  var middle;
	  if (sortedrArr.length === 0) {
	    return 0;
	  } else if (sortedrArr.length === 1) {
	    middle = 0;
	  } else {
	    middle = Math.floor(sortedrArr.length / 2);
	  }
	  // http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
	  this.insertNode(sortedrArr[middle]);

	  var leftArr = sortedrArr.slice(0, middle);
	  var rightArr = sortedrArr.slice(middle+1, sortedrArr.length);

	  this.createMinHeightBST(leftArr);
	  this.createMinHeightBST(rightArr);
	};

	var BST = new BinarySearchTree();
	var sortedUniqueArr = [0, 1, 2, 3, 4, 5, 6];

	BST.createMinHeightBST(sortedUniqueArr);
	console.log(BST);

//var BST = new BinarySearchTree();
//
//BST.insertNode(8);
//BST.insertNode(3);
//BST.insertNode(10);
//BST.insertNode(1);
//BST.insertNode(6);
//BST.insertNode(14);
//BST.insertNode(4);
//BST.insertNode(7);
//BST.insertNode(13);

console.log(BST);