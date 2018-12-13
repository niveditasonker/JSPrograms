var countAndSay = function(n) {
    if(n === null || n.length === 0){
        return "";
    }
    
    var cur = "1";
    var num = 1;
    
    while(n > 1){
        var r = "";
        
        for(var i = 0; i < cur.length; i++){
//            console.log(i,cur[i],r,cur[i+1]);
            if(i < cur.length - 1 && cur[i] === cur[i+1]){
                num++;
            } else {
                r += (num + "" + cur[i]);
                num = 1;
            }
//            console.log("2.....",i,cur[i],r,cur[i+1]);
        }
        
        cur = r;
        n--;
    }
    return cur;   
};

console.log(countAndSay(6));