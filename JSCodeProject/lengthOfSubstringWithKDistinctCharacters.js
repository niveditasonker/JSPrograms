var lengthOfLongestSubstringKDistinct = function(s, k) {
    let j = 0, res = 0;
    let map = {};

    for(let i=0;i<s.length;i++){
      map[s[i]] = map[s[i]] || 0;
      map[s[i]]++;
       console.log(map, Object.keys(map).length);
      while(Object.keys(map).length > k){
        map[s[j]]--;
        if(map[s[j]] == 0){
          delete map[s[j]];
        }
        j++;
      }

      res= Math.max(res, i-j+1);
    }

    return res;       
};

var s = "eceba", k = 2;
console.log(lengthOfLongestSubstringKDistinct(s,k));
var s = "aa", k = 1;
console.log(lengthOfLongestSubstringKDistinct(s,k));
//https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/discuss/49708/Sliding-Window-algorithm-template-to-solve-all-the-Leetcode-substring-search-problem.