/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
	this.numbers = [];
    this.max = maxNumbers;
    for(let i = 0;i < this.max;i++) this.numbers[i] = i;
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
	for(let i = 0 ; i < this.numbers.length ;i++){
        if(this.numbers[i]!=-1){
        	this.numbers[i] = -1;
           return i; 
        } 
    }
    return -1;    
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
	return this.numbers[number] != -1;
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    this.numbers[number] = number;
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = Object.create(PhoneDirectory).createNew(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

var directory = new PhoneDirectory(3);
console.log(directory.get());
console.log(directory.get());
console.log(directory.check(2));
console.log(directory.get());
console.log(directory.check(2));
console.log(directory.release(2));
console.log(directory.check(2));