//var Stack = function(sz){
//	this.sz = sz;
//	this.items1 = [];
//	this.items2 = [];
//	this.count1 = 0;
//	this.count2 = 0;
//	this.idx1 = -1;
//	this.idx2 = sz;
//	var arr = new Array();
//}
//
//Stack.prototype.push1 = function(x) {
//	if(stack.isFull()){
//		console.log("Stack 1 overflow");
//	}else{
//		arr[this.idx1++] = x;
//	}
//	
//}
//
//Stack.prototype.push2 = function(x) {
//	if(stack.isFull()){
//		console.log("Stack 2 overflow");
//	}else{
////		this.items2.push(x);
//		arr[--this.idx2] = x;
//	}
//}
//
//Stack.prototype.isEmpty1 = function() {
//    if(this.items1.length == 0){
//    	return true;
//    }
//    return false;
//};
//
//Stack.prototype.isEmpty2 = function() {
//    if(this.items2.length == 0){
//    	return true;
//    }
//    return false;
//};
//
//Stack.prototype.isFull = function() {
//	console.log(this.idx1,this.idx2);
//	if(this.idx1 == this.idx2){
//		return true;
//	}
//	return false;
//}
//
//Stack.prototype.pop1 = function() {
//	if(stack.isEmpty1()){
//		console.log("Empty Stack");
//	}
//    var element = arr[this.idx1];
//    this.idx1--;
//    return element;
//}
//
//Stack.prototype.pop2 = function() {
//	if(stack.isEmpty2()){
//		console.log("Empty Stack");
//	}	
//    var element = arr[this.idx2];
//    this.idx2--;
//    return element;
//}




//Creates a stack
var Stack = function() {
 this.count = 0;
 this.storage = {};
}

//Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
 this.storage[this.count] = value;
 this.count++;
}

//Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
 // Check to see if the stack is empty
 if (this.count === 0) {
     return undefined;
 }

 this.count--;
 var result = this.storage[this.count];
 delete this.storage[this.count];
 return result;
}

//Returns the length of the stack
Stack.prototype.size = function() {
 return this.count;
}
var stack = new Stack(5);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

//while (!stack.isEmpty1()) {
//    console.log(" %d", Stack.pop1());
//}