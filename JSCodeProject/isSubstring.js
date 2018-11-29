var s1 = "for", s2 = "geeksforgeeks";

var isSubstring = function(s,t){
	var m = s.length;
	var n = t.length;
	
	for(let i=0;i<=n-m;i++){
		var j;
		for(j=0;j<m;j++){
			console.log("....",i,j,t[i+j],s[j]);
			if(t[i+j] != s[j]) break;
		}
		console.log(j);
		if(j==m) return i;
	}
	
	return -1;
}

var stringOne= "sam";
var stringTwo= "I am sam";
var stringThree= "I am SAM";
var stringFour="I am john";

function stringCompare(strOne, strTwo){

    if( ((strTwo.toUpperCase()).indexOf(strOne.toUpperCase())) !== -1){
        return console.log(strOne + " is a substring of " + strTwo);
    }

    else{

        return console.log(strOne + " is not a substring of " + strTwo);
    }

}

stringCompare(stringOne, stringTwo);//sam is a substring of I am sam
stringCompare(stringOne, stringThree);//sam is a substring of I am SAM
stringCompare(stringOne, stringFour);//sam is not a substring of I am john

console.log(isSubstring(s1,s2));