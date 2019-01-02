var backspaceCompare = function(S, T) {
    var newS = "";
    var newT = "";
    
    for(let i=0;i<S.length;i++){
        
        if(S.charAt(i) == '#'){
            newS = newS.slice(0,-1);
        }else{
            newS += S.charAt(i);
        }
        
    }
    
     for(let i=0;i<T.length;i++){
        if(T.charAt(i) == '#'){
            newT = newT.slice(0,-1);
        }else{
            newT += T.charAt(i);
        }
         
     }
    
    console.log(newS, newT);
    return newS==newT;
};

var S = "ab#c", T = "ad#c";
console.log(backspaceCompare(S,T));