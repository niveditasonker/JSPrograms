var str1 = "pale";
var str2 = "paless";

console.log(isOneEditAway(str1, str2));
function isOneEditAway(s1, s2){
	var l1 = s1.length;
	var l2 = s2.length;
	
	if(Math.abs(l1-l2)>1){
		return false;
	}
		var i=0;
		var j=0;
		var c = 0;
		
		while(i<l1 && j<l2){
			if(s1.charAt(i) == s2.charAt(j)){
				i++;
				j++;
			}else{
				c++;
				if(l1>l2) i++;
				else if(l2>l1) j++;
				else{
					i++;
					j++;
				}
			}
			
		}
		
		if(i<l1 || j<l2){
			c++;
		}
		
		if(c==1){
			return true;
		}
		
	return false;
}