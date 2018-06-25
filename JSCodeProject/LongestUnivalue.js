//let Tree = {
//    val: 3,
//    right: {
//        val: 3,
//    },
//    left: {
//        val: 3,
//        left: {
//            val: 3
//        },
//        right: {
//        val: 2,
//            left: {
//                val: 2
//            },
//            right: null
//        }
//    }
//}

let Tree = {
	    val: 5,
	    right: {
	        val: 5,
	        right: {
	            val: 5
	        },
	    },
	    left: {
	        val: 4,
	        left: {
	            val: 1
	        },
	        right: {
	        val: 1,
//	            left: {
//	                val: 2
//	            },
	            right: null
	        }
	    }
	}

let maxLen, res = 0;

    
function LongestUnivaluePath(root){
    if(root == null)return 0

    postOrder(root);

    console.log(res);

}
		  
		
function postOrder(root){
    var rl =0, rr = 0;
    if(root == null) return 0
    
    var pl = postOrder(root.left);
    var pr = postOrder(root.right);
    
    if(root.left != null && root.left.val == root.val)rl = pl + 1;
    if(root.right != null && root.right.val == root.val)rr = pr + 1;
    console.log(pr);
    res = Math.max(res, rl + rr)
    
    maxLen = Math.max(rl, rr);
    console.log(rl, rr, (rl+rr), res, maxLen);
    
    return maxLen;
}  

LongestUnivaluePath(Tree);