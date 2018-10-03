var strArr = ["at","","","","ball","","","car","","","dad","",""];
var searchStr = "ball";

function search(sArr, fStr){
	if(sArr==null||sArr.length==0||fStr==null||fStr=="") return -1;
	return isPresent(sArr,fStr,0,sArr.length-1);
}

function isPresent(sArr,fStr,first,last){
	if(first>last) return -1;
	var mid = parseInt((first+last)/2);
	
	if(sArr[mid]==""){ //if mid is empty, find the closest non empty string
		var left = mid-1;
		var right= mid+1;
		while(true){
			if(left<first && right>last) return -1;
			else if(right<=last && sArr[right] != "") {
				mid=right; break;
			}
			else if(left>=first && sArr[left] != "") {
				mid=left; break;
			}
			rigth++;
			left--;
		}
	}
	
	if(sArr[mid]==fStr) return mid;
	else if(sArr[mid].localeCompare(fStr)<0){
		return isPresent(sArr,fStr,mid+1,last); //search right
	}else{
		return isPresent(sArr,fStr,first,mid-1); //search left
	}
}

console.log(search(strArr,searchStr));
