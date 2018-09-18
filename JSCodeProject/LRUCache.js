var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.list = [];
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    else{
    	var idx = this.list.indexOf(key);
    	var moveKey = this.list[idx];
    	this.list.splice(idx,1);
    	this.list.push(key);
    	return this.cache.get(key);
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
	if(!this.cache.has(key)){
		if(this.cache.size == this.capacity){
			var removeKey = this.list.shift();
			this.cache.delete(removeKey);
		}
		this.cache.set(key,value);
		this.list.push(key);
	}else{
		this.cache.set(key,value);
		this.get(key);
	}
	
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);   
console.log(cache);