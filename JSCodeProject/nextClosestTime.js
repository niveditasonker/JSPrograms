var nextClosestTime = function(time) {
    var set = new Set();
    var diff = Number.MAX_VALUE;

    set.add(parseInt(time.substring(0, 1)));
    set.add(parseInt(time.substring(1, 2)));
    set.add(parseInt(time.substring(3, 4)));
    set.add(parseInt(time.substring(4, 5)));

    if(set.size==1) return time;
    var res = '';

    var digits = Array.from(set);
    console.log(set, digits);

    var minutes = parseInt(time.substring(0,2)) * 60 + parseInt(time.substring(3,5))
    dfs(digits,"",0,minutes);

    function dfs(digits, curr, pos, tgt){
      if(pos==4){
//        console.log(curr);
        min = parseInt(curr.substring(0,2))*60 + parseInt(curr.substring(2,4));
        if(min==tgt) return;

        let d = min-tgt > 0 ? min-tgt : (24*60) + min-tgt;

        if(d<diff){
          diff = d;
          res = curr.substring(0,2) + ":" + curr.substring(2,4);
        }
        return;
      }

      for(let i=0;i<digits.length;i++){
        if(pos==0 && digits[i] > 2) continue;
        if(pos==1 && parseInt(curr)*10 + digits[i] > 23) continue;
        if(pos==2 && digits[i] > 5) continue;
        if(pos==3 && parseInt(curr.substring(2))*10 + digits[i] > 59) continue;
        dfs(digits, curr+digits[i], pos+1, tgt)
      }
    }

    return res;
};

console.log(nextClosestTime("23:59"));
console.log(nextClosestTime("17:38"));

// https://leetcode.com/problems/next-closest-time/discuss/107775/JAVA-three-ways-to-solve-this-problem
