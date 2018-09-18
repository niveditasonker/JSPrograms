var numCourses = 4;
var prerequisites = [[1,0],[2,0],[3,1],[3,2]];

var findOrder = function(numCourses, prerequisites) {
    var courses = [],
    prereqCounts = [],
    queue = [],
    temp,
    result = [],
    i,
    j,
    k;
    
for (i = 0; i < numCourses; i++) {
    courses.push(new Set());
}

// [1] is [0]'s prerequisite 
// To take course [0] you should have finished course [1]
for (i = 0; i < prerequisites.length; i++) {
    courses[prerequisites[i][1]].add(prerequisites[i][0]);
}

for (i = 0; i < numCourses; i++) {
    prereqCounts[i] = 0;
}

// count the pre-courses
for (i = 0; i < numCourses; i++) {
    temp = Array.from(courses[i]);
    
    for (j = 0; j < temp.length; j++) {
        prereqCounts[temp[j]]++;
    }
}

for (i = 0; i < numCourses; i++) {
    if (prereqCounts[i] === 0) {
        queue.push(i);
        prereqCounts[i] = -1;
    }
}

while (queue.length > 0) {
    j = queue.shift();
    result.push(j);
    
    temp = Array.from(courses[j]);
    
    for (i = 0; i < temp.length; i++) {
        prereqCounts[temp[i]]--;
        
        if (prereqCounts[temp[i]] === 0) {
            queue.push(temp[i]);
            prereqCounts[temp[i]] = -1;
        }
    }
}

if (result.length === numCourses) {
    return result;
}

return [];


};

console.log(findOrder(numCourses, prerequisites));