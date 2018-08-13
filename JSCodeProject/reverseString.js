var str = "hello world";

var reverseStr = "";

console.log(reverseStr2(str));

for(var i=str.length;i>=0;i--){
	reverseStr += str.charAt(i);
}
console.log(reverseStr);

function reverseStr2(s){
	if(s===""){
		return "";
	}else{
		return reverseStr2(s.substring(1))+s.charAt(0);
	}
}

var s = "the sky is blue";

var ns = s.split(' ');

var rs = "";

for(var i=ns.length-1;i>=0;i--){
	rs += ns[i]+" ";
}
console.log(rs);



