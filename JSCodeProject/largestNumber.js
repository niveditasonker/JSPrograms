var largestNumber2 = function(nums) {
    var i,
        len = nums.length,
        result = '',
        startWithZero = true;
    nums.sort(function(a, b){
    	console.log(a,b, a + '' + b, b + '' + a);
        var x = a + '' + b,
            y = b + '' + a;
        console.log(parseInt(y) - parseInt(x));
        return parseInt(y) - parseInt(x);
    });
    
    console.log(nums);
    for (i = 0; i < len; i++) {
        if (startWithZero && nums[i] !== 0) {
            startWithZero = false;
        }
        result += nums[i];
    }
    if (startWithZero) {
        return '0';
    }
    return result;
};

var inp =[3,30,34,5,9];
console.log(largestNumber2(inp));

let x, { x: y = 1 } = { x }; y;

console.log(x);

let array = [1, 2, 3]

let extension = [4, 5, 6]

array = [...extension, ...array];

console.log(array);

var a = [typeof a, typeof y][1];

console.log(typeof typeof a);

console.log((function(x, f = () => x) {
	console.log("x........."+x);
	  var x;

	  var y = x;

	  x = 2;

	  return [x, y, f()];

	})(1));
