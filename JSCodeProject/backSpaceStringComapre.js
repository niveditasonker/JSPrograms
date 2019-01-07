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


var backspaceCompare2 = function(S, T) {
    let i = S.length - 1, j = T.length - 1;
        while (true) {
            for (let back = 0; i >= 0 && (back > 0 || S.charAt(i) == '#'); --i)
                back += S.charAt(i) == '#' ? 1 : -1;
            for (let back = 0; j >= 0 && (back > 0 || T.charAt(j) == '#'); --j)
                back += T.charAt(j) == '#' ? 1 : -1;
            if (i >= 0 && j >= 0 && S.charAt(i) == T.charAt(j)) {
                i--; j--;
            } else
                return i == -1 && j == -1;
        }
}
var S = "ab#c", T = "ad#c";
console.log(backspaceCompare(S,T));

var S = "ab#c", T = "ad#c";
console.log(backspaceCompare2(S,T));

console.log(backspaceCompare("a##c","#a#c"));
console.log(backspaceCompare2("a##c","#a#c"));