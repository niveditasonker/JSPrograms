var s = "leetcode";
var data={};

FirstUniqChar(s);
var index = getIndex();
console.log(index);

function FirstUniqChar(s){
	for(var i=0;i<s.length-1;i++){
    if(data[s[i]] == undefined ){
    	data[s[i]] = {};
    	data[s[i]]["count"] = 0;
    }
 		data[s[i]]["count"]++ ;
	}
}
//console.log(data);

//Object.keys(data)
//.sort()
//.forEach(function(v, i) {
////    console.log(v, data[v]);
// });

//var ks = Object.keys(data).sort(function(a,b){return data[a]-data[b]});
//console.log(ks);

function getIndex(){
	var idx = -1;
	for (var c in data){
		if(data[c]["count"] == 1){
			idx = s.indexOf(c);
			break;
		}
	}
	return idx;
}


//var firstUniqChar = function(s) {
//    var repeatCount = new Array(256);
//    
//    for(var i=0;i<s.length;i++){
//    	var c= s.charAt(i);
////    	console.log(c,s.charCodeAt(i),'A'.charCodeAt(0));
//    	repeatCount[s.charCodeAt(i)-'A'.charCodeAt(0)]++;
//    }
//    
//    console.log(repeatCount);
//    
//    for(var i=0;i<s.length;i++){
//    	var c = s.charAt(i);
//        if (repeatCount[s.charCodeAt(i)-'A'.charCodeAt(0)] == 1) {
//            return i;
//        }
//    }
//    
//    return -1;
//};
//
//console.log(firstUniqChar(s));

