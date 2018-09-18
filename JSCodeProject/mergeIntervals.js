function Interval(start, end) {
     this.start = start;
     this.end = end;
} 

var merge = function(intervals) {
     var res = [];
     
     intervals.sort((i1, i2) => i1.start > i2.start ? 1 : -1 );
     
     
     if(intervals.length) {
         res.push(intervals[0]);
     }
     
     for(var i = 1; i < intervals.length; i++) {
         var interval = intervals[i];
         var last = res.pop();
//         console.log(interval,last);
         if(interval.start > last.end) {
             res.push(last);
             res.push(interval);
         } else {
             last.end = Math.max(last.end, interval.end);
             res.push(last);
         }
     }
     
     return res;
 };
 
 
 function merge2(intervals) {
	    if (intervals.length <= 1) return intervals;

	    /// sorts by start time
	    let arr = intervals.sort((a,b) => a.start - b.start);

	    for (let i=0;i < arr.length - 1;i++) {
	        if (arr[i].end >= arr[i+1].start) {
	           // merge
		   arr[i].end = Math.max(arr[i].end, arr[i+1].end);
	           // delete merged interval       
	           arr.splice(i+1, 1);
						 
		   // dont increment i
	           i--;
	        }
	    }
	    return arr;
	};
 var data = [
	  {start: 1, end: 3},
	  {start: 2, end: 6},
	  {start: 8, end: 10},
	  {start: 15, end: 18},
	]

// var inp = [[1,3],[2,6],[8,10],[15,18]];
 
 console.log(merge(data));
 console.log(merge2(data));