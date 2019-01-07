
//var houses = [
//	[1,11,5], // 0
//	[2,6,7], // 1
//	[3,13,9], // 2
//	[12,7,16], // 3
//	[14,3,25], // 4 
//	[19,18,22], // 5
//	[23,13,29], // 6
//	[24,4,28], // 7
//];
var houses = [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ];


var result = [];

function start() {

	house = findFirstHouse();
	hStart = house[0];
	hHeight = house[1];

	result.push([hStart, hHeight]);

	tempHigh = 0;

	for (x = hStart + 1; x <= 30; x++) {
		tempHigh = findMaxHeight(x);
		if(tempHigh != hHeight) {
//			console.log(x, tempHigh);
			result.push([x, tempHigh]);	
			hHeight = tempHigh;
		}
	}

	console.log(result);
	return result;
}

function findFirstHouse() {
//	console.log("houses",houses);
	for (i = 0; i < houses.length; i++) {
		return houses[i];
	};
}

function findMaxHeight(x) {
	var maxHeight = 0;
//	console.log('x = ' + x);
	for (i = 0; i < houses.length; i++) {
		if(x >= houses[i][0] && x <= houses[i][2]) {
			console.log(houses[i]);
			if(houses[i][2] == x) continue;
			if(houses[i][1] > maxHeight)
				maxHeight = houses[i][1];
		}
	}
	return maxHeight;
}

var getSkyline = function(buildings) {
    var res = [], height = [], pq = [0], prevMax = null;
    for(var b of buildings) {
        height.push([b[0], -b[2]]);
        height.push([b[1],  b[2]]);
    }
    height.sort((a, b) => {
        if(a[0] === b[0])  return a[1] - b[1];
        return a[0] - b[0];
    });
   
    for(var h of height) {
        if(h[1] < 0) {
            pq.push(-h[1]);
        } else {
            remove(pq, h[1]);
        }
        console.log(pq);
        var maxV = Math.max(...pq);
        console.log(maxV);
        if(prevMax !== maxV) {  // maxV changed after remove h[1]
            res.push([h[0], maxV]);
            prevMax = maxV;
        }
    }
    return res;
};

var remove = function(arr, val) { // remove the first element equal to val
    var ind = -1;
    for(var i=0; i<arr.length; i++) {
        if(val === arr[i]) {
            ind = i;
            break;
        }
    }
    arr.splice(ind, 1);
    return;
};





var getSkyline2 = function(buildings) {
    if (buildings.length === 0) return [];
    const points = [];
    for (let b of buildings) {
        points.push(b[0]);
        points.push(b[1]);
    }
    points.sort((a,b)=> a-b);
    const segments = [];
    for (let i=1;i<points.length;i++) {
        let start = points[i-1];
        let end = points[i];
        if (start === end) continue;
        segments.push({start, end, height:0});
    }
    
    const copy = segments.slice();
    
    let l = segments.length;
    while (l > 1) {
        for (let i=0;i<l-1;i+=2) {
            const node = {
                start: segments[i].start,
                end: segments[i+1].end,
                height: 0
            };
            node.left = segments[i];
            node.right = segments[i+1];
            segments[~~(i/2)] = node;
        }
        if (l % 2 == 1) {
            segments[~~(l/2)] = segments[l-1];
        }
        l = ~~(l/2) + (l % 2);
    }
    for (let [start, end, height] of buildings) {
        update(segments[0], start, end, height);
    }
    
    function update(node, s, e, h) {
        const {start, end, height, left, right} = node;
        if (left == null && right == null) {
            node.height = Math.max(height, h);
        } else {
            const m = left.end;
            if (e <= m) {
                update(left, s, e, h);
            } else if (s >= m) {
                update(right, s, e, h);
            } else {
                update(left, s, m, h);
                update(right, m, e, h);
            }
        }
    }
    const ret = [];
    for (let n of copy) {
        if (ret.length && ret[ret.length-1][1] === n.height) continue;
        ret.push([n.start, n.height]);
    }
    ret.push([points[points.length -1], 0])
    return ret;
};

//console.log(start());
console.log(getSkyline(houses));
//console.log(getSkyline2(houses));

//https://github.com/miguelmota/skyline/blob/master/skyline.js

//https://leetcode.com/problems/the-skyline-problem/discuss/200405/javascript-solution-plus-max-heap-implementation