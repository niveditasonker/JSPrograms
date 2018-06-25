var Stack = function(){
	this.items = [];
}

Stack.prototype.push = function(x) {
	this.items.push(x);
}

Stack.prototype.pop = function() {
	if(this.items.length ==0){
		return "Underflow";
	}else{
		return this.items.pop();
	}
	
};

Stack.prototype.isEmpty = function() {
    return this.items.length == 0;
};

Stack.prototype.printStack = function(){
	var str="";
	for(var i=0;i<this.items.length;i++){
		str += this.items[i] + " ";
	}
	return str;
}

Stack.prototype.insertAtBottom = function(x){
	if(stack.isEmpty){
		stack.push(x);
	}else{
		var a = this.items[this.items.length-1];
		stack.pop();
		stack.insertAtBottom(a);
		stack.push(a);
		
	}
}

Stack.prototype.reverseStack = function(){
	var str = "";
	if(this.items.length > 0){
		var x = this.items[this.items.length-1];
		console.log(x);
		stack.pop();
		stack.reverseStack();
		stack.insertAtBottom(x);
	}
	return str;

}

var stack = new Stack();

//stack.push(10);
//stack.push(20);
//stack.push(30);
//stack.push(9);
//stack.push(15);
//stack.push(40);

console.log(stack.printStack());

stack.insertAtBottom(1);
stack.insertAtBottom(2);
stack.insertAtBottom(3);
stack.insertAtBottom(4);
console.log(stack);
console.log(stack.reverseStack());
console.log(stack);