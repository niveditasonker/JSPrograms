
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

	result.push(hStart, hHeight);

	tempHigh = 0;

	for (x = hStart + 1; x <= 30; x++) {
		tempHigh = findMaxHeight(x);
		if(tempHigh != hHeight) {
			console.log(x, tempHigh);
			result.push(x, tempHigh);	
			hHeight = tempHigh;
		}
	}

	console.log(result);
	return result;
}

function findFirstHouse() {
	for (i = 0; i < houses.length; i++) {
		return houses[i];
	};
}

function findMaxHeight(x) {
	var maxHeight = 0;
	console.log('x = ' + x);
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

console.log(start());