class BSTNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    add(val, node) {
        if (!node) {
            this.root = new BSTNode(val);
            return;
        }
        
        if (val > node.val) {
            if (node.right) {
                this.add(val, node.right);
            } else {
                node.right = new BSTNode(val);
            }
        } else {
            if (node.left) {
                this.add(val, node.left);
            } else {
                node.left = new BSTNode(val);
            }
        }
        
        node.size++;
    }
    
    rank(k) {
        let node = this.root;
        
        while(true) {
            const leftSize = node.left ? node.left.size : 0;
            
            if (leftSize === k) {
                return node.val;
            }
            
            if (leftSize > k) {
                node = node.left;
            } else {
                node = node.right;
                k = k - leftSize - 1;
            }
        }
    }
}


var MedianFinder = function() {
	this.BST = new BST(); 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	 this.BST.add(num, this.BST.root);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.BST.root.size;
    
    if (size % 2 === 0) {
        return (this.BST.rank(size / 2) + this.BST.rank(size / 2 - 1)) / 2;
    }
    
    return this.BST.rank(parseInt(size / 2));    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
mf.addNum(3);
mf.addNum(4);
console.log(mf.findMedian());