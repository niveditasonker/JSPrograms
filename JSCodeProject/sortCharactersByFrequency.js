var frequencySort = function(s) {
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] || 0;
        hash[s[i]]++;
    }
    console.log(hash);
    var arr = [];
    for (var i in hash) {
    	console.log(i);
        arr.push([i, hash[i]]);
    }
    console.log(arr);

    arr.sort(function(a,b) {
        return b[1]-a[1];
    });

    var ans = "";
    for (i=0; i<arr.length; i++) {
    	console.log(arr[i][0],arr[i][1],arr[i][0].repeat(arr[i][1]));
        ans = ans + arr[i][0].repeat(arr[i][1]);
    }

    return ans;
};

//var str = "ccaaa";
var str = "tree" ;
//var str ="Aabb";


function calcFreq(s){
	var sdata = {};
	var max = 0;
	for(var i=0;i<s.length;i++){
		
		if(sdata[s.charAt(i)] == undefined){
			sdata[s.charAt(i)] = {};
			sdata[s.charAt(i)]["count"]=0;
		}
		sdata[s.charAt(i)]["count"]++;
	}
	
	var ks = Object.keys(sdata).sort(function(a, b){
	    return sdata[b].count-sdata[a].count;
//	    return sdata[a].count-sdata[b].count;
	})
//	console.log(ks);
	var newStr = "";
//	for(var i=ks.length-1;i>=0;i--){
//		for(var j=0;j<sdata[ks[i]]["count"];j++){
//			newStr += ks[i];
//		}
//	}
	
	for(var i=0;i<ks.length;i++){
		newStr += ks[i].repeat(sdata[ks[i]]["count"]);
	}
	return newStr;
}

console.log(calcFreq(str));
console.log("============");
console.log(frequencySort(str));