var stairs = 5;

function climbStairs(n){
	if(n==0) return 0;
	if(n==1) return 1;
	if(n==2) return 2;
	
	var one_step_before = 2;
	var two_step_before = 1;
	var all_ways = 0;
	
	for(var i=2;i<n;i++){
		all_ways = one_step_before + two_step_before;
		two_step_before = one_step_before;
		one_step_before = all_ways;
	}
	return all_ways;
}


console.log(climbStairs(stairs));

var numWays = function(N) {
	  var answer = 0;
	  var recurse = function(number) {
	    if (number === 0) {
	      answer++;
	    } else if (number > 0) {
	      recurse(number - 1);
	      recurse(number - 2);
	      recurse(number - 3);
	    }
	  };
	  recurse(N);
	  return answer;
	};

	/* TEST */

	console.log(numWays(1), 1);
	console.log(numWays(2), 2);
	console.log(numWays(3), 4);
	console.log(numWays(5));