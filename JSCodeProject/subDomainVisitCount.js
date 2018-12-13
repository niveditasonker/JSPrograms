var inp = ["9001 discuss.leetcode.com"];
var inp = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

var subdomainVisits = function(cpdomains) {
	let map = new Map();
	
	for(dom of cpdomains){
		 let values = dom.split(' ');
//		 console.log(values);
		 let count = Number(values[0]);
	     let domains = values[1];
//	     console.log(count,domains);
	     
	     while(domains){
	    	 let total = count;
	    	 if (map.has(domains)) {
	    		 total += map.get(domains);
	         }
	            
	         map.set(domains, total);
	         domains = domains.indexOf(".") === -1 ? null : domains.substring(domains.indexOf(".") + 1, domains.length); 
	     }
	}
	console.log(map);
	let arr = [];
    for (let [domain, count] of map) {
        arr.push(count + ' ' + domain);
    }
    return arr;
};

console.log(subdomainVisits(inp));