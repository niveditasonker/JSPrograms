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