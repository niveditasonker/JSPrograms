var nums = [1,2,3];
//var nums = [1,1,2];

var permute2 = function(nums) {
    var res = [];
    var visited = [];
    
    generate2(nums,0,visited,[],res);
    return res;
};

var generate2 = function(nums,idx,visited,output,result){
//	console.log("Len: "+nums.length,output.length);
	if(nums.length==output.length){
//		console.log(output.slice());
    	result.push(output.slice());
        return;
    }
    
    for(var i=0;i<nums.length;i++){
//    	console.log(nums[i],visited[i]);
    	if(!visited[i]){
//    		console.log("2:........",nums[i],visited[i]);
        	visited[i]=true;
            output.push(nums[i]);
//            console.log("Calling generate");
            generate2(nums,idx+1,visited,output,result);
//            console.log("Output Array: ",output);
            output.pop();
//            console.log("Output Array: ",output);
            visited[i]=false;
        }
    }
}

console.log(permute2(nums));



















var permute = function(nums) {
    return permuteAux(nums, []);
};

var permuteAux = function(nums, partialNums) {
  if(nums === null || nums.length === 0) {
      return [partialNums];
  }
  var listArrays = [];
//  console.log("partialNums: ", partialNums);
  for(var i = 0; i < nums.length; i++) {
//	  console.log("1.....nums: ",i, nums.slice(0,i));
//	  console.log("2.....nums: ", i,nums.slice(i + 1, nums.length));
      var withoutI = nums.slice(0,i).concat(nums.slice(i + 1, nums.length));
//      console.log("2.....withoutI: ", withoutI);
      var partial = partialNums.concat([nums[i]]);
//      console.log("partial: ", partial);
      var sol = permuteAux(withoutI, partial);
//      console.log("sol: ", sol);
      if(sol.legnth !== 0) {
        listArrays = listArrays.concat(sol);
      }
  }
  return listArrays;
};

console.log(permute(nums));
