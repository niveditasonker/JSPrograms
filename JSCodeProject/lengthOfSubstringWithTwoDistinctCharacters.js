var lengthOfLongestSubstringTwoDistinct = function(s) {
    let j = 0, res = 0;
    let map = {};

    for(let i=0;i<s.length;i++){
      map[s[i]] = map[s[i]] || 0;
      map[s[i]]++;
      // console.log(map, Object.keys(map).length);
      while(Object.keys(map).length > 2){
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

console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));