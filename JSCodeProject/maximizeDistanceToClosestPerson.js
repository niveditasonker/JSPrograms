/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
        let N = seats.length;
        let prev = -1, future = 0;
        let ans = 0;

        for (let i = 0; i < N; ++i) {
            if (seats[i] == 1) {
                prev = i;
            } else {
                while (future < N && seats[future] == 0 || future < i){
                    console.log(i,future);
                    future++;
                }
                    
                
                let left = prev == -1 ? N : i - prev;
                let right = future == N ? N : future - i;
                ans = Math.max(ans, Math.min(left, right));
                console.log("Here",left,right,ans);
            }
        }

        return ans;    
};

console.log(maxDistToClosest([1,0,0,0,1,0,1]));