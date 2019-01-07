function Interval(start, end) {
     this.start = start;
     this.end = end;
}

//var data = [
//	  {start: 9, end: 12},
//	  {start: 2, end: 7},
//	  {start: 5, end: 17},
//	  {start: 12, end: 17},
//	]
var data = [
	  {start: 0, end: 30},
	  {start: 5, end: 10},
	  {start: 15, end: 20},
	]

var minMeetingRooms = function(intervals) {

	intervals.sort((a,b)=>{
		return a.start > b.start ? 1 : -1;
	});
	
	for(var i=1; i<intervals.length; i++){
		if(intervals[i-1].end > intervals[i].start){
			return false;
		}
	}
	return true;
};

//minMeetingRooms(input);

var minMeetingRooms2 = function(intervals){
	var schedule = {};
	intervals.forEach((interval)=>{
		
		schedule[interval.start] = schedule[interval.start] || 0;
//		console.log("St 1",interval, schedule[interval.start],0);
		schedule[interval.start]++;
//		console.log("St 2",interval.start, schedule[interval.start]);
		
		schedule[interval.end] = schedule[interval.end] || 0;
//		console.log("End 1",interval, schedule[interval.end],0);
		schedule[interval.end]--;
//		console.log("End 2",interval.end, schedule[interval.end]);
	});
	var maxRooms = 0;
	var rooms = 0;
	
	console.log(schedule);
	for(var i in schedule){
		rooms += schedule[i];
		console.log(i,schedule[i],rooms);
		maxRooms = Math.max(rooms, maxRooms);
	}
	
	return maxRooms;
}

console.log(minMeetingRooms2(data));