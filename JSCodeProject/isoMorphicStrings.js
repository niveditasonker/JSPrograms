/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map = new Map();
    
    if(s.length != t.length) return false;
    
    for(let i=0;i<s.length;i++){
        let sc = s.charAt(i);
        let tc = t.charAt(i);
        
        if(map.has(sc)){
            if(map.get(sc) != tc) return false;
        }else{
            if(!map.has(sc)){
                map.set(sc,tc);
            }else{
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic("egg","add"));
console.log(isIsomorphic("foo","bar"));
console.log(isIsomorphic("paper","title"));