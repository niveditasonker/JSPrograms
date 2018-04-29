var MinStack = function(){
	this.items = [];
}

MinStack.prototype.push = function(x) {
	this.items.push(x);
}

MinStack.prototype.pop = function() {
	if(this.items.length ==0){
		return "Underflow";
	}else{
		return this.items.pop();
	}
	
};

MinStack.prototype.queuePop = function() {
	if(this.items.length ==0){
		return "Underflow";
	}else{
		return this.items.shift();
	}
	
}

MinStack.prototype.top = function() {
	return this.items[this.items.length - 1];
};

MinStack.prototype.queuePeek = function() {
	return this.items[0];
};

MinStack.prototype.getMin = function() {
    var min = this.items[0];
    for(var i=0;i<this.items.length;i++){
    	if(this.items[i] < min){
    		min = this.items[i];
    	}
    }
    return min;
};

MinStack.prototype.isEmpty = function() {
    return this.items.length == 0;
};

MinStack.prototype.printStack = function(){
	var str="";
	for(var i=0;i<this.items.length;i++){
		str += this.items[i] + " ";
	}
	return str;
}

var stack = new MinStack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(9);
stack.push(15);
stack.push(40);

console.log(stack.top());
console.log(stack.printStack());
console.log(stack.queuePeek());
console.log(stack.queuePop());
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.printStack());
console.log(stack.getMin());

