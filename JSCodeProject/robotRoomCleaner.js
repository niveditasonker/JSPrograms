/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
function Robot() {
 *
      // Returns true if the cell in front is open and robot moves into the cell.
      // Returns false if the cell in front is blocked and robot stays in the current cell.
      @return {boolean}
      this.move = function() {
          ...
      };
 
      // Robot will stay in the same cell after calling turnLeft/turnRight.
      // Each turn will be 90 degrees.
      @return {void}
      this.turnLeft = function() {
          ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
}
*/
var moveUp = function(robot){
    return robot.move()
}

var moveLeft = function(robot){
    robot.turnLeft()
    var ok = robot.move()
    robot.turnRight()
    return ok
}

var moveRight = function(robot){
    robot.turnRight()
    var ok = robot.move()
    robot.turnLeft()
    return ok
}

var moveDown = function(robot){
    robot.turnRight()
    robot.turnRight()
    var ok = robot.move()
    robot.turnLeft()
    robot.turnLeft()
    return ok
}
function cleanCell(robot,visited,x,y){
	var id = x+","+y;
	if(visited[id]){
		return;
	}
	robot.clean();
	visited[id] = 1
    if(moveUp(robot)){
        cleanCell(robot, visited, x,y-1)
        moveDown(robot)
    }
    if(moveLeft(robot)){
        cleanCell(robot, visited, x-1,y)
        moveRight(robot)
    }
    if(moveRight(robot)){
        cleanCell(robot, visited, x+1,y)
        moveLeft(robot)
    }
    if(moveDown(robot)){
        cleanCell(robot, visited, x,y+1)
        moveUp(robot)
    }
}

var cleanRoom = function(robot) {
    visited = {};
    cleanCell(robot,visited,0,0);
    
};

var room = [
	  [1,1,1,1,1,0,1,1],
	  [1,1,1,1,1,0,1,1],
	  [1,0,1,1,1,1,1,1],
	  [0,0,0,1,0,0,0,0],
	  [1,1,1,1,1,1,1,1]
	];
var row = 1;
var col = 3;

console.log(cleanRoom(room));
//https://leetcode.com/problems/robot-room-cleaner/discuss/136392/Javascript-DFS-solution