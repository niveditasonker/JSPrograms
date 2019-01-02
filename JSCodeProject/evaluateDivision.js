/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    var neighbours = {};

    // Initialise the adjacency list!
    for (var e = 0; e < equations.length; e++){
        neighbours[equations[e][0]] = [];
        neighbours[equations[e][1]] = [];
    }
    for (var e = 0; e < equations.length; e++){
        neighbours[equations[e][0]].push([equations[e][1], values[e]]);
        neighbours[equations[e][1]].push([equations[e][0], 1/values[e]]);
    }
    
    res = [];
    for (e of queries){
        res.push(evaluateExpression(e, neighbours))
    }
    return res;
};


function evaluateExpression(expression, neighboursList){
    if (!(expression[0] in neighboursList) || !(expression[1] in neighboursList)) { return -1; }
    if (expression[0] == expression[1]) { return 1; } 
    
    // Initialise with the expression we want to get! We start with the numerator's children in the queue.
    var q = neighboursList[expression[0]].slice();
    var checked = [];
    
    while (q.length > 0){
        //console.log(q, checked)
        var elem = q.shift();
        
        // If our element is part of the expression, then we're done!
        if (elem[0] == expression[1]){ 
            //console.log("DONE")
            return elem[1] 
        }
        checked.push(elem[0]);
        
        console.log("...............", checked, expression, elem);
        
        // Otherwise add the neighbours to the queue with updated divisors.
        var neighbours = neighboursList[elem[0]];
        for (var n = 0; n < neighbours.length; n++){
            var nextToCheck = neighbours[n];
            if (checked.includes(nextToCheck[0])){ continue ;}
            q.push([nextToCheck[0], nextToCheck[1]*elem[1]])
        }
    }
    
    
    return -1;
}

var equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ];

console.log(calcEquation(equations, values, queries));

//Prefer leetcode code