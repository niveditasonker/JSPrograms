//var inp = [
//  "wrt",
//  "wrf",
//  "er",
//  "ett",
//  "rftt"
//];

var inp = [
//	  'wert',
//	  'woo'
	"baa", "abcd", "abca", "cab", "cad"
	];

var alienOrder = function(words) {
    if(words.length==0) return '';
    
    var len = words.length;
    var requiredMap = {};
    var charCountMap = {};
    var queue = [];
    var result = [];
    var hasCycle = false;
    
    for(let i=0;i<len;i++){
    	var char = words[i].split('');
    	let j=0;
    	for(j=0;j<char.length;j++){
    		if(!requiredMap[char[j]]){
    			requiredMap[char[j]] = [];
    			charCountMap[char[j]] = 0;
    		}
    	}
    	
//    	console.log("requiredMap: ");
//    	console.log(requiredMap);
//    	console.log("charCountMap: ");
//    	console.log(charCountMap);
    	
    	if(i==0 || words[i] == words[i-1]){
    		continue;
    	}
    	
    
    	var curr = words[i];
    	var prev = words[i-1];
    	j=0;
    	
    	console.log(curr,prev);
    	while(j<curr.length && j< prev.length && curr.charAt(j)== prev.charAt(j)){
    		j++;
    	}
    	console.log("j....."+j);
    	if(j<prev.length && requiredMap[prev.charAt(j)].indexOf(curr.charAt(j)) == -1){
    		requiredMap[prev.charAt(j)].push(curr.charAt(j));
    		charCountMap[curr.charAt(j)]++;
    	}
    	
    	console.log("requiredMap: ");
    	console.log(requiredMap);
    	console.log("charCountMap: ");
    	console.log(charCountMap);
    }
    
    Object.keys(charCountMap).forEach(char =>{
    	console.log("char...."+char);
    	if(charCountMap[char] == 0) queue.push(char);
    });
    
    console.log("queue...."+queue);
    
    while(queue.length > 0){
    	var temp = queue.shift();
    	result.push(temp);
    	console.log("res: "+result);
    	for(let i=0;i<requiredMap[temp].length;i++){
    		console.log("queue...."+requiredMap[temp][i],i,temp);
    		var tmpChar = requiredMap[temp][i];
    		charCountMap[tmpChar]--;
    		
    		if(charCountMap[tmpChar] == 0){
    			queue.push(tmpChar);
    		}
    	}
    }
    
    console.log("charCountMap: ");
    console.log(charCountMap);
    
    Object.keys(charCountMap).forEach(char =>{
    	console.log("char...."+char);
    	if(charCountMap[char] !== 0){
    		hasCycle = true;
    	}
    });
    console.log(hasCycle);
    console.log(result);
    return hasCycle ? '' : result.join('');
};

console.log(alienOrder(inp));







var alienOrder2 = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let requiredCharMap = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        // wert and woo
        // requiredCharMap : { w: [], e: [ 'o' ], r: [], t: [], o: [] } 
        // charPreReqCount : { w: 0, e: 0, r: 0, t: 0, o: 1 } 
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!requiredCharMap[chars[j]]) {
                requiredCharMap[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }
      
        // skip the first one || the same word
        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        const cur = words[i];
        const prev = words[i - 1];
        j = 0;
        
      
        // skip same words such as wert and woo will skip w and compare only ert vs oo
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
      
      
        // since words are in lexico order. wert and woo after skipping w, they becomes ert and oo, e will have higher order than oo
        if (j < prev.length && requiredCharMap[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            requiredCharMap[prev.charAt(j)].push(cur.charAt(j));
            // number of prerequisite for using that char in this case it will be o: 1 since o has prerequisite e
            // { w: [], e: [ 'o' ], r: [], t: [], o: [] } 
            // { w: 0, e: 0, r: 0, t: 0, o: 1 } 
            charPreReqCount[cur.charAt(j)]++;
        }
    }
  
  
    // these will be the roots since there are no prerequisite needed to use them
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
  
    // for those that we know are root
    while(queue.length > 0) {
        const rootChar = queue.shift();
        
        result.push(rootChar);
        
        for (i = 0; i < requiredCharMap[rootChar].length; i++) {
            var charRequiresRoot = requiredCharMap[rootChar][i];
            charPreReqCount[charRequiresRoot]--;
            
            if (charPreReqCount[charRequiresRoot] === 0) {
                queue.push(charRequiresRoot);
            }
        }
    }
  
    Object.keys(charPreReqCount).forEach((char) => {
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
  
    return hasCycle ? '' : result.join('');
}



// var words = [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ];


var words =[
  'wert',
  'woo'
];

console.log('ans', alienOrder2(words));
