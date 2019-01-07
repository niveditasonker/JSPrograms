/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let str = A;
    let count = 1;
    
    while(str.length < B.length){
        count++;
        str += A;
    }
    
    if(str.indexOf(B) == -1){
        str += A;
        count++;
    }
    
    return str.indexOf(B) == -1 ? -1 : count;
};

var repeatedStringMatch2 = function(A, B) {
    let i = 0;
    let str = '';
    do {
         str = A.repeat(++i);
        if (str.indexOf(B) !== -1){
            return i;
        }
    }
    while (str.length <= B.length);
    if (A.repeat(++i).indexOf(B) !== -1){
        return i;
    }
    return -1;
}

var A = "abcd" , B = "cdabcdab";

console.log(repeatedStringMatch(A,B));
console.log(repeatedStringMatch2(A,B));

