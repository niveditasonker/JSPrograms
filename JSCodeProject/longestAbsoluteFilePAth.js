var lengthLongestPath = function(input) {
    const lines = input.split('\n');
    console.log(lines);
    const accumulatedLength = [];
    let maxLength = 0;
    lines.forEach((line) => {
    	const tabs = countTabs(line);
    	console.log("line: ",line,tabs);
        const currentLength = tabs === 0 ? line.length : 1 - tabs + line.length; // \t counts as 1
        accumulatedLength[tabs] = tabs === 0 ? currentLength : currentLength + accumulatedLength[tabs - 1];
        if (line.includes('.')) {
            maxLength = Math.max(maxLength, accumulatedLength[tabs]);
        }
    });
    
    return maxLength;
};

function countTabs(line) {
    let count = 0;
    let lastPosition = 0;
//    console.log("line: ",line);
    while ((lastPosition = line.indexOf('\t', lastPosition)) !== -1) {
    	console.log("lastPosition: ",lastPosition,line.indexOf('\t', lastPosition));
        lastPosition += 1;
        count += 1;
    }
    
    return count;
}

var str = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";

console.log(lengthLongestPath(str));