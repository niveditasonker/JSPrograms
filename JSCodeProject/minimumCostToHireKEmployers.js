var mincostToHireWorkers = module.exports = function(quality, wage, K) {
        
        workers = [];
        for (let i = 0; i < wage.length; i++) {           
            workers.push([wage[i],quality[i]]);
        }    
        workers.sort((a,b)=>a[0]*b[1]-a[1]*b[0]); //sorted as per their ratios;
        
        console.log(workers);
    
        let ans = 0;
        let vi = [];
        let sum = 0;
        for (let i = 0; i < K; ++i) {
            vi[i] = workers[i][1];
            sum += vi[i];
        }
 
        vi.sort((a,b)=>a-b);
        console.log(sum,vi);
        ans = sum * (workers[K - 1][0] * 1.0 / workers[K - 1][1]);
        console.log(ans);
   
        for (let i = K; i < workers.length; ++i) {
        	console.log("i: ",i);
            if (workers[i][1] < vi[K - 1]) {
                sum -= vi[K - 1];
                sum += workers[i][1];
                insert(vi, workers[i][1]);
                ans = Math.min(ans, sum * 1.0 * workers[i][0] / workers[i][1]);               
            }          
        }
    
        return ans;
    
    function insert(vi, data) {
        for (let it = 0; it < vi.length; it++) {
            if (data <= vi[it]) {
            	console.log("vi: ",vi);
                vi.splice(it, 0, data);
                console.log("vi: ",vi);
                break;
            }
        }
        vi.length--;
    };
};

console.log(mincostToHireWorkers([10,20,5],[70,50,30],2));