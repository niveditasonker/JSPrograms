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
	    return b.count-a.count
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