/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        var candidate  =0;
        
        for(var i=1;i<n;i++){
            if(!knows(i,candidate)){
                candidate = i;
            }
        }   
            for(var j=0;j<n;j++){
                if(j==candidate) continue;
                if(!knows(j,candidate) || knows(candidate,j)) return -1;
            }
        return candidate;
    };
};