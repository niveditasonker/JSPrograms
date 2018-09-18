function Queue(){
	this.stack = [];
}

function pop(){
	this.stack.shift();
}

function push(x){
	this.stack.push(x);
}

function peek(){
	return this.stack[0];
}

function isEmpty(){
	return this.stack.length==0;
}



var MyQueue = function() {
    this.q1 = [];
    this.q2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q1.push();
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.q1.length == 0){
    	if(this.q2.length == 0){
    		return null;
    	}else{
    		while(this.q1.length > 0){
    			var temp = this.q1.pop();
    			this.q2.push(temp);
    		}
    		return this.q2.pop();
    	}
    }else{
    	return this.q2.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.q1.length == 0){
    	if(this.q2.length == 0){
    		return null;
    	}else{
    		while(this.q1.length > 0){
    			var temp = this.q1.pop();
    			this.q2.push(temp);
    		}
    		return this.q2[this.q2.length-1];
    	}
    }else{
    	return this.q2[this.q2.length-1];
    }   
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.q1.length==0 && this.q2.length == 0) return true;
    else return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue.pop());