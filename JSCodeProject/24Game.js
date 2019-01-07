/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
   let list = [];
   let res = false;
   let diff = 0.001; 
    
    for(let n of nums){
        list.push(n);
    }
//    console.log(list);
    helper(list,res,diff);
    return res;
};

function helper(list,res,diff){
    if(res) return;
    if(list.length == 1){
//        console.log(list[0]);
        if(Math.abs(list[0] - 24.0) < diff)
            res = true;
        return;
    }  
    
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < i; j++) {
            let next = [];
            let p1 = list[i], p2 = list[j];
            next.push(p1+p2);
            next.push(p1-p2);
            next.push(p2-p1);
            next.push(p1*p2);
            
            if(Math.abs(p2) > diff){
                next.push(p1/p2);
            }
            if(Math.abs(p1) > diff){
                next.push(p2/p1);
            }  
            
            list.splice(i,1);
            list.splice(j,1);
            
            for(let nx of next){
                list.push(nx);
                helper(list,res,diff);
                list.pop();
            }
            
            list.splice(j,0,p2);
            list.splice(i,0,p1);
        }   
    }
}

var judgePoint24Sec = function(cards) {
	  if(cards.length===1) {
	    var roundValue = Math.round(cards[0]*100)/100;
	    return roundValue === 24;
	  }

	  for(var i=0; i<cards.length; i++) {
	    for(var j=0; j<cards.length; j++) {
	      if(i===j) continue;
	      var small = Math.min(i,j);
	      var large = Math.max(i,j);
	      var thisCards = cards.slice();
	      thisCards.splice(large,1);
	      thisCards.splice(small,1);

	      var iValue = cards[i];
	      var jValue = cards[j];
	      var isValid = false;
	      isValid = isValid || judgePoint24( [iValue+jValue, ...thisCards] );
	      isValid = isValid || judgePoint24( [iValue-jValue, ...thisCards] );
	      isValid = isValid || judgePoint24( [iValue*jValue, ...thisCards] );
	      if(jValue !==0) {
	        isValid = isValid || judgePoint24( [iValue/jValue, ...thisCards] );
	      }
	      if(isValid) return true;
	    }
	  }
	  return false;
	};	
	
	
	var judgePoint24Three = function(nums) {    
	    for (let a = 0; a < 4; a++) {
	        for (let b = 0; b < 4; b++) {
	            if (a === b) continue;
	            for (let c = 0; c < 4; c++) {
	                if (a === c || b === c) continue;
	                for (let d = 0; d < 4; d++) {
	                    if (a === d || b === d || c === d) continue;
	                    // 24 combination of a,b,c,d
	                    if (v1(nums[a],nums[b],nums[c],nums[d])) {
	                        return true;
	                    }
	                }
	            }    
	        }
	    }
	    return false;
	};

	function v1 (a, b, c, d) {
	    if (v2(a+b, c, d) || v2(a-b, c, d) || v2(a*b, c, d) || v2(a/b, c, d)) return true;
	    if (v2(a, b+c, d) || v2(a, b-c, d) || v2(a, b*c, d) || v2(a, b/c, d)) return true;
	    if (v2(a, b, c+d) || v2(a, b, c-d) || v2(a, b, c*d) || v2(a, b, c/d)) return true;
	    return false;
	}
	function v2 (x, b, c) {
	    if (v3(x+b, c) || v3(x-b, c) || v3(x*b, c) || b && v3(x/b, c)) return true;
	    if (v3(x, b+c) || v3(x, b-c) || v3(x, b*c) || c && v3(x, b/c)) return true;
	    return false;
	}
	function v3 (y, d) {
	    if (   Math.abs(y+d-24) < 0.01
	        || Math.abs(y-d-24) < 0.01
	        || Math.abs(y*d-24) < 0.01
	        || d && Math.abs(y/d-24) < 0.01 ) {
	        return true;
	    }
	    return false;
	}
//console.log(judgePoint24([4, 1, 8, 7]));
//	https://leetcode.com/problems/24-game/discuss/107673/JAVA-Easy-to-understand.-Backtracking.
console.log(judgePoint24Sec([4, 1, 8, 7]));
console.log(judgePoint24Three([4, 1, 8, 7]));