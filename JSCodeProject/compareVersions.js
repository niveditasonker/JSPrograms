//var ver1 = "7.5.2.4";
//var ver2  ="7.5.3";

//var ver1 = "0.1";
//var ver2  ="1.0";

var ver1 = "1.0.1";
var ver2  ="1";

console.log(compareVer(ver1, ver2));

function compareVer(v1, v2){
	if(v1>v2){
		return 1;
	}else if(v1<v2){
		return -1;
	}else{
		return 0;
	}
}

var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.');
    var arr2 = version2.split('.');
    
    var index = 0;
    var len = Math.max(arr1.length, arr2.length);
    
    while(index < len){
        var v1 = parseInt(arr1[index]);
        var v2 = parseInt(arr2[index]);
        
        if(isNaN(v1) && v2 !== 0){
            return -1;
        }
        
        if(isNaN(v2) && v1 !== 0){
            return 1;
        }
        
        if(v1 > v2){
            return 1;
        } else if(v1 < v2){
            return -1;
        }
        
        index++;
    }
    
    return 0;
};

console.log(compareVersion(ver1, ver2));