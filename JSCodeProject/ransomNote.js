/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	if(ransomNote.length > magazine.length ) return false;
    var data = {};
    var rdata = {};
    
    for(let i=0;i<magazine.length;i++){
        if(data[magazine[i]] == undefined){
            data[magazine[i]] = {};
            data[magazine[i]]["count"]=0;
        }
        data[magazine[i]]["count"]++;
    }
//    console.log(data);
    
    for(let i=0;i<ransomNote.length;i++){
        if(ransomNote[i] in data){
            if(data[ransomNote[i]]["count"] > 0){
                data[ransomNote[i]]["count"]--;
            }else{
               if(rdata[ransomNote[i]] == undefined){
                    rdata[ransomNote[i]] = {};
                    rdata[ransomNote[i]]["count"]=0;
                }
                rdata[ransomNote[i]]["count"]++;                
            }
            
        }else{

            return false;
        }
    }
    
    // console.log(rdata)
    if(Object.keys(rdata).length === 0) return true;
    else return false;
    
    // return true;
};

var canConstruct2 = function(ransomNote, magazine) {
	if(ransomNote.length > magazine.length ) return false;
	
	var rArr = ransomNote.split('');
	var old = magazine;
	
	rArr.forEach(function(item,index){
		magazine = magazine.replace(item,'');
		console.log("....",magazine);
	});
	
	if(old.length == magazine.length+rArr.length) return true;
	else return false;
}


console.log(canConstruct("a","b"));
console.log(canConstruct("aa","ab"));
console.log(canConstruct("aa","aba"));
console.log(canConstruct("aabbc","baac"));

console.log("=============");
//console.log(canConstruct2("a","b"));
//console.log(canConstruct2("aa","ab"));
console.log(canConstruct2("aa","aba"));
//console.log(canConstruct2("aabbc","baac"));