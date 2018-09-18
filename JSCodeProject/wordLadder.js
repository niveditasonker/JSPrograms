var beginWord = "hit";
var endWord = "cog";
var wordList = ["hot","dot","dog","lot","log","cog"];

var ladderLength = function(beginWord, endWord, wordList) {

	var visited = new Set();
    var queue = [];
    var level = 1;
    var letters = "abcdefghijklmnopqrstuvwxyz";
    queue.push(beginWord);
    visited.add(beginWord);
    
    while(queue.length){
//    	console.log(queue.length,len);
    	var len = queue.length;
//    	console.log(queue.length,len);
    	for(var i=0;i<len;i++){
    		var word = queue.shift();
    		for(var j=0;j<word.length;j++){
    			for(var k=0;k<letters.length;k++){
    				var newWord = word.substring(0,j) + letters[k] + word.substring(j+1);
    				
    				if(newWord == endWord) return level+1;
    				
    				if(wordList.includes(newWord) && !visited.has(newWord)){
    					queue.push(newWord);
    				    visited.add(newWord);
    				}
    			}
    		}
    	}
    	level++;
    }
    return 0;
    
    /*	
    var visited = new Set();
    var queue = [];
    var level = 1;
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    queue.push(beginWord);
    visited.add(beginWord);    
    
    while(queue.length > 0) {
        
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var word = queue.shift();
            
            for(var j = 0; j < word.length; j++) {
                for(var k = 0; k < letters.length; k++) {
                    var newWord = word.substring(0, j) + letters[k] + word.substring(j + 1);
                    
                    if(newWord === endWord) {
                        return level + 1;
                    }
                    if(wordList.includes(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
    */
};

console.log(ladderLength(beginWord,endWord,wordList));