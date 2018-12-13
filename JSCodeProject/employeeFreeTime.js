function Interval(start, end) {
     this.start = start;
     this.end = end;
} 

var employeeFreeTime = function(schedule) {
  const list = [];
  const res = [];

  for (let i=0; i<schedule.length; i++) {
    const curr = schedule[i];
    for (let j=0; j<curr.length; j++) {
      list.push(curr[j]);
    }
  }

  const len = list.length;
  if (len === 0) return res;

  list.sort((a,b) => a.start - b.start);
  let [{ end }] = list;
  console.log(".....",{ end });
  for (let i = 1; i < len; i++) {
    const item = list[i];
    if (item.start > end) {
      res.push(new Interval(end, item.start));
    }
    end = Math.max(end, item.end);
  }
  return res;
};

var employeeFreeTime2 = function(schedule) {
    // need to flatten array
    schedule = [].concat(...schedule);
    console.log(schedule);
    schedule.sort((a, b) => a.start - b.start);
    
    let intervals = [schedule[0]];
    console.log(intervals);
    
    for (let i = 1; i < schedule.length; i++) {
        const prev = intervals.pop();
        const current = schedule[i];
        
        // check for overlap
        if (prev.end >= current.start) {
            const start = Math.min(prev.start, current.start);
            const end = Math.max(prev.end, current.end);
            intervals.push(new Interval(start, end));
        } else {
            intervals.push(prev);
            intervals.push(current);
        }
        
    }
    
    // find the gap between intervals
    let result = [];
    for (let i = 1; i < intervals.length; i++) {
        const prev = intervals[i - 1];
        const current = intervals[i];

        console.log(prev, current);
        // gap
//        result.push(new Interval(prev.end, current.start));
        result.push(new Interval(prev[1], current[0]));
    }
    
//    console.log(result);
    return result;
};

var schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]];
//console.log(employeeFreeTime(schedule));
console.log(employeeFreeTime2(schedule));