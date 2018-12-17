/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    this.times = [];
    this.hits = [];
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    var idx = timestamp % 300;
    if(this.times[idx] != timestamp){
    	this.times[idx] = timestamp;
    	this.hits[idx] = 1;
    }else{
    	this.hits[idx]++;
    }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    var total = 0;
    for (let i = 0; i < 300; i++) {
        if (timestamp - this.times[i] < 300) {
            total += this.hits[i];
        }
    }
    return total;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

console.log("Using Arrays");
var counter = new HitCounter(); //using Array
counter.hit(1);
counter.hit(2);
counter.hit(3);
console.log(counter.getHits(4));
counter.hit(300);
console.log(counter.getHits(300));
console.log(counter.getHits(301));
//Prefer Arrays



//Not giving right answer
var HitCounterUsingQueue = function() {
	this.WINDOW = 300;
    this.queue = [];

};

HitCounterUsingQueue.prototype.hit = function(timestamp) {
	this.queue.push(timestamp);
};

HitCounterUsingQueue.prototype.getHits = function(timestamp) {
	while (!this.queue.length > 0 && timestamp - this.queue[0] >= this.WINDOW) {
        this.queue.shift();
    }
    return this.queue.length;
};

console.log("Using Queue");
var counterQ = new HitCounterUsingQueue(); //using Array
counterQ.hit(1);
counterQ.hit(2);
counterQ.hit(3);
console.log(counterQ.getHits(4));
counterQ.hit(300);
console.log(counterQ.getHits(300));
console.log(counterQ.getHits(301));



//Not giving right answer
var HitCounterUsingMap = function() {
    this.count = 1;
    this.map = {};

};

HitCounterUsingMap.prototype.hit = function(timestamp) {
	if(!this.map.hasOwnProperty(timestamp)){
		this.map[timestamp] = this.count;
	}else{
		this.map[timestamp] = ++this.count;
	}
};

HitCounterUsingMap.prototype.getHits = function(timestamp) {
	var closestTime = this.map[timestamp];
	if (closestTime == null) {
        return 0;
    }
	
	var curCount = this.map[closestTime];
	var prevTime = timestamp - 300;
	var closestPrev = this.map[prevTime];
	if (closestPrev == null || this.map[closestPrev] == null) {
        return curCount;
    } else {
        return curCount - this.map[closestPrev];
    }
};

console.log("Using Queue");
var counterMap = new HitCounterUsingMap(); //using Array
counterMap.hit(1);
counterMap.hit(2);
counterMap.hit(3);
console.log(counterMap.getHits(4));
counterMap.hit(300);
console.log(counterMap.getHits(300));
console.log(counterMap.getHits(301));