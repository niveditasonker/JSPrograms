var solution = function(read4) {
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