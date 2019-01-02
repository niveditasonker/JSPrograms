/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = [];
    
    for(let i=0;i<=word1.length;i++){
        if(!dp[i]) dp[i] = [];
    
        for(let j=0;j<=word2.length;j++){
            if(i==0){
                dp[i][j] = j;
            }else if(j==0){
                dp[i][j] = i;
            }else if(word1[i-1]==word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1]) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};

var word1 = "horse", word2 = "ros";

console.log(minDistance(word1,word2));