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


