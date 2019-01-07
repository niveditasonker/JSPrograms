var S = "ADOBECODEBANC";
var T = "ABC";

var minWindow = function(s, t) {
    var lenS = s.length;
    var lenT = t.length;
    var queue = [];
    var tRequireCount = {};
    var tFoundCount = {};
    var hasFound = 0;
    var windowBeg = -1;
    var windowEnd = lenS;
    
    for(var i = 0; i < lenT; i++) {
        // init tFoundCount to all 0s
        tFoundCount[t[i]] = 0;
        // init tRequireCount to count of that character in t
        tRequireCount[t[i]] = tRequireCount[t[i]] || 0;
        tRequireCount[t[i]]++;
    }
  
    for(i = 0; i < lenS; i++) {
        if(tRequireCount[s[i]] > 0) {
            // use queue to skip a lot of redudant character
            // minWindow('aeeeeeebceeeeaeeedcb', 'abc');
            // queue will contain index
            // 1st round: [ 0, 7, 8 ] and then get rid of character at 0
            // 2nd round: [ 7, 8, 13 ] and get rid of character at 7
            // 3rd round: [ 8, 13, 18, 19 ]
            queue.push(i);
            tFoundCount[s[i]]++;
          
            // if found count is over require count, we don't need those extra, so don't record it to hasFound
            if(tFoundCount[s[i]] <= tRequireCount[s[i]]) {
                hasFound++;
            }
            
            // when the current location which is in queue
            if(hasFound === lenT) {
                var k;
              
                do {
                    k = queue.shift();
                    tFoundCount[s[k]]--;
                } while(tFoundCount[s[k]] >= tRequireCount[s[k]]);
                // moving to the minimum window location
              
                if(windowEnd - windowBeg > i - k) {
                    windowBeg = k;
                    windowEnd = i;
                    // window will be in
                    // 1st round 0 8 
                    // 2nd round 7 13
                }

                hasFound--;
            }
        }
    }
    
    return windowBeg !== -1 ? s.substring(windowBeg, windowEnd + 1) : '';
};


function minWindow2(s, t) {
	  let map = {};
//	  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);
	  
	  for(let i=0;i<t.length;i++){
		  let c = t.charAt(i);
		  map[c] = (map[c] || 0) + 1
	  }

	  let count = t.length;   // remaining matching count

	  let l = 0;
	  let r = 0;

	  let start = 0;
	  let minLen = Infinity;

	  while (r < s.length) {
		  console.log("r: ",r,s[r], map[s[r]]);
//		  if (map[s[r++]]-- > 0){
		  if (map[s[r++]]-- > 0){
	    	count--;
	    }
//		  r++; map[s[r]]--;
	    console.log("r2: ",r,s[r],map[s[r]]);

	    while (count === 0) {   // valid
	      if (r - l < minLen) {
	        minLen = r - l;
	        start = l;
	      }

	      if (map[s[l++]]++ === 0) count++; // make it invalid
//	      if (map[s[l]] === 0) count++; // make it invalid
	    }
	  }

	  return minLen === Infinity ? '' : s.substr(start, minLen);
	}
console.log(minWindow(S,T));
console.log(minWindow2(S,T));

//https://leetcode.com/explore/interview/card/google/63/sorting-and-searching-4/345/discuss/26805/Accepted-O(n)-solution