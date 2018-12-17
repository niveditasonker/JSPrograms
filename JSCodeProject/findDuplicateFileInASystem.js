var input = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];

var findDuplicate = function(paths) {
    var output = [];
    var map = {};
    
    for(var i=0;i<paths.length;i++){
        var curr=paths[i].split(" ");
        console.log(curr);
        for(var j=1;j<curr.length;j++){
            var fileName=curr[j].split("(")[0];
            var content=curr[j].split("(")[1].split(")")[0];
            console.log(fileName, content);
            if(map[content]==null){
                map[content]=[];
            }
            map[content].push(curr[0]+"/"+fileName);
           
        }
    }
    console.log(map);
    
    for(let file in map){
		 if(map[file].length===1){
		     delete map[file];
		 }else{
			 output.push(map[file]);
		 }
    }
    return output;
};

console.log(findDuplicate(input));