function Stack(){
	this.items = [];
	this.mid = 0;
	this.top = 0;
}

Stack.prototype.push1 = function(val){
	this.items.unshift(val);
	this.mid++;
	this.top++;
}

Stack.prototype.push2 = function(val){
	this.items.splice(this.top,0,val);
	this.top++;
}

Stack.prototype.push3 = function(val){
	this.items.push(val);
}

Stack.prototype.isEmpty1 = function(){
	return this.mid == 0;
}

Stack.prototype.isEmpty2 = function(){
	return this.mid == this.top;
}

Stack.prototype.isEmpty3 = function(){
	return this.top == this.items.length;
}

Stack.prototype.pop1 = function(){
	if(this.isEmpty1()){
		return;
	}
	var ans = this.items.shift();
	
	if(this.mid > 0){
		this.mid--;
		this.top--;
	}
	
	return ans;
}

Stack.prototype.pop2 = function(){
	if(this.isEmpty2()){
		return;
	}
	var ans = this.items[this.top-1];
	this.items.splice(this.top-1,1);
	if(this.top > this.mid){
		this.top--;
	}
	
	return ans;
}

Stack.prototype.pop3 = function(val){
	if(this.isEmpty3()){
		return;
	}
	
	return this.items.pop(val);;
}

Stack.prototype.peek1 = function(){
	return this.isEmpty1() ? undefined : this.items[0];
}

Stack.prototype.peek2 = function(){
	return this.isEmpty2() ? undefined : this.items[this.mid-1];
}

Stack.prototype.peek3 = function(){
	return this.isEmpty3() ? undefined : this.items[this.items.length-1];
}
var stack = new Stack();

stack.push1('1a');
stack.push1('1b');
stack.push1('1c');
stack.push2('2a');
stack.push2('2b');
stack.push2('2c');
stack.push3('3a');
stack.push3('3b');
stack.push3('3c');

var a1 = stack.pop1();
var a2 = stack.pop2();
var a3 = stack.pop3();

var peek1 = stack.peek1();
var peek2 = stack.peek2();
var peek3 = stack.peek3();

var b1 = stack.pop1();
var b2 = stack.pop2();
var b3 = stack.pop3();

var isEmptya1 = stack.isEmpty1();
var isEmptya2 = stack.isEmpty2();
var isEmptya3 = stack.isEmpty3();

var c1 = stack.pop1();
var c2 = stack.pop2();
var c3 = stack.pop3();

var d1 = stack.pop1();
var d2 = stack.pop2();
var d3 = stack.pop3();

var isEmptyb1 =stack.isEmpty1();
var isEmptyb2 = stack.isEmpty2();
var isEmptyb3 = stack.isEmpty3();

console.log(stack.items, stack.mid, stack.top);
console.log(a1, a2, a3);
console.log(peek1, peek2, peek3);
console.log(b1, b2, b3);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(c1, c2, c3);
console.log(d1, d2, d3);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);


