var digits = "541";

//console.log(getCombinations(digits));
function getCombinations(digits){
 	var map = [];
    map[2]="abc";
    map[3]="def";
    map[4]="ghi";
    map[5]="jkl";
    map[6]="mno";
    map[7]="pqrs";
    map[8]="tuv";
    map[9]="wxyz";
    map[0]="";

	var result = [];

	if(digits == null || digits.length == 0){
	    return result;
	}
	var temp = [];

	getString(digits, temp, result, map);
	return result;
}

function getString(digits, temp, result, map){
	if(digits.length == 0){
        var arr = [];
        for(var i=0; i<temp.length; i++){
            arr[i] = temp[i];
        }
   
		result.push(arr.join(''));
		return;
        
	}
	var curr = parseInt(digits.substring(0,1));
    var letters = map[curr];
    for(var i=0; i<letters.length; i++){
        temp.push(letters.charAt(i));
        getString(digits.substring(1), temp, result, map);
        temp.pop();
    }    
    
}



var letterCombinations = function(digits) {
	var outPut = [];
	var input = [];
	var res="";
	if (digits === undefined || digits.length===0) {
	return outPut;
	}
	const dials = {
	'2': ['a','b','c'],
	'3': ['d','e','f'],
	'4': ['g','h','i'],
	'5': ['j','k','l'],
	'6': ['m','n','o'],
	'7': ['p','q','r','s'],
	'8': ['t','u','v'],
	'9': ['w','x','y','z'],
	}
//	console.log(getPossibilities(digits, dials, outPut, 0, res));
	return getPossibilities(digits, dials, outPut, 0, res);

}

function getPossibilities(digits, dials, outPut, pos, res) {
	if (digits.length === res.length && outPut.indexOf(res) < 0) {
		outPut.push(res);
		return;
	}
	if (dials[digits.charAt(pos)] !== undefined) {
		dials[digits.charAt(pos)].forEach(function(element) {
			res+=element;
			getPossibilities(digits, dials, outPut, pos+1, res);
			res = res.slice(0, res.length-1);
		});
	}
	return outPut;
}


var digits = "23";
console.log(letterCombinations(digits));