var kEmptySlots = function(flowers, k) {
    let days = [];
    for(let i=0;i<flowers.length;i++){
    	days[flowers[i]-1] = i+1;
    }
    
    let left = 0; 
    let right = k+1;
    let res = Number.MAX_VALUE;
    console.log(days);
    
    for(let i=0;right<days.length;i++){
    	if(days[i] < days[left] || days[i] <= days[right]){
    		if(i==right){
    			console.log("in if:",i,right);
    			res = Math.min(res, Math.max(days[left], days[right]));
    		}
    		
    		left = i;
    		right = k+i+1;
    	}
    }
    
    return res==Number.MAX_VALUE ? -1 : res;
};

var kEmptySlotsJS = function(flowers, k) {
    const size = flowers.length;
    let slots = Array(size).fill(false);
    
    const canStepK = function(k, cur, step) {
        while (k > 0) {
            cur += step;
            k--;
            if (cur >= size || cur < 0 || slots[cur]) return false;
        }
        return slots[cur + step] === true;
    }
    
    for (let i = 0; i < slots.length; i++) {
        let cur = flowers[i]-1;
        slots[cur] = true;
        if (canStepK(k, cur, 1) || canStepK(k, cur, -1)) return i + 1;
    }
    return -1;
};

var flowers1= [1,2,3], k1=1;
var flowers2= [1,3,2], k2=1;

console.log(kEmptySlots(flowers1,k1));
console.log(kEmptySlots(flowers2,k2));

console.log("JS......");
console.log(kEmptySlotsJS(flowers1,k1));
console.log(kEmptySlotsJS(flowers2,k2));