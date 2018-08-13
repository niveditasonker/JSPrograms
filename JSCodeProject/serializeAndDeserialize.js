var serialize = function(root) {
	var result = [];
	function serializeTree(node, output){
    	if(node == null){
    		output.push('#');
            return;
   	 	}
        output.push(node.val);
        serializeTree(node.left, output);
        serializeTree(node.right, output);
    }
    
	serializeTree(root, result);
    return result.join(',');    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	data = data.split(',');
  	var index = 0;
  	
    function deserializeTree(node){
    	if(index > data.length || data[index] == '#'){
        	return null;
        }
        
        var node = new TreeNode(parseInt(data[index]));
        index++;
        node.left = deserializeTree(data[index]);
        index++;
        node.right = deserializeTree(data[index]);
        return node;
    }
  
  	return deserializeTree(data);    
};