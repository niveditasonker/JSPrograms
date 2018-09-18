var solutionII = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    var buffCount = 0;
    var buffPtr = 0;
    var temp = [];
    return function(buf, n) {
        var ptr = 0;
        
        while(ptr < n){
            if(buffPtr == 0){
                buffCount = read4(temp);
            }
            if(buffCount == 0) break;
            
            while(ptr < n && buffPtr < buffCount){
                buf[ptr++] = temp[buffPtr++];
            }
            
            if(buffPtr >= buffCount){
                buffPtr = 0;
            }
        }
    return ptr;
    };
};


/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution1 = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        var eof = false;
        var temp = Array(4);
        var total = 0;
        
        while(!eof && total < n){
            var count = read4(temp);
            
            if(count < 4) eof = true;
            count = Math.min(count, n - total);
            
            for(var i=0;i<count;i++){
                buf[total++] = temp[i];
            }
        }
        return total;
        
       
    };
};