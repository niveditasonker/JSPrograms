var MinStack = function() {
    this.min = [];
    this.stack = [];
}

MinStack.prototype.push = function(x){
	var min = this.getMin();
	
	this.stack.push(x);
	
	if(min == undefined || min >= x){
		this.min.push(x);
	}
}

MinStack.prototype.pop = function(){
	var val = this.stack.pop();
	
	if(val == min){
		this.min.pop();
	}
}

MinStack.prototype.top = function(){
	return this.stack[this.stack.length-1];
}

MinStack.prototype.getMin = function(){
	return this.min[this.min.length-1];
}

var ms = new MinStack();

ms.push(22);
ms.push(92);
ms.push(24);
ms.push(27);
ms.push(32);



console.log(ms);
console.log(ms.getMin());