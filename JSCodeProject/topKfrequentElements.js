var numArr = [1,1,1,2,2,3];
var freq = 2;

var topKFrequent = function(nums, k) {
    var data= {};
    
    for(var i=0; i<nums.length;i++){
    	if(data[nums[i]]==undefined){
    		data[nums[i]]={};
    		data[nums[i]]["count"] = 0;
    	}
    	data[nums[i]]["count"]++;
    }
//    console.log(data);
    
    for (var c in data){
    	if(data[c]["count"] >= k){
    		console.log(c, data[c]["count"]);
    	}
    }
}

topKFrequent(numArr, freq);

//var str = "ccaaa";
//var str = "tree" ;
var str ="Aabb";
calcFreq(str);

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
	
//	var ks = Object.keys(sdata).reduce(function(a, b){ return sdata[a] > sdata[b] ? a : b });
//	var ks =  Object.keys(sdata).sort(function(a,b){return sdata[a]-sdata[b]})
	var ks = Object.keys(sdata).sort(function(a, b){
//	    return b.count-a.count;
	    return a.count-b.count;
	})
	console.log(ks);
	console.log(sdata);
	
	var newStr = "";
	for(var i=ks.length-1;i>=0;i--){
//		console.log()
		for(var j=0;j<sdata[ks[i]]["count"];j++){
			newStr += ks[i];
		}
	}
	console.log(newStr);
}



var frequencySort = function(s) {
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] || 0;
//        console.log(hash[s[i]],s[i],hash[s[i]] || 0);
        hash[s[i]]++;
//        console.log(hash[s[i]],s[i],hash[s[i]] || 0);
    }
    console.log(hash);
    // var keys = Object.keys(hash);
    var arr = [];
    for (var i in hash) {
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

console.log(frequencySort(str));