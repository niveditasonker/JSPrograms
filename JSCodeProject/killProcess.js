var killProcess = function (pid, ppid, kill) {
    // Build a map of parent -> [...child pids]    
    let map = new Map();

    for (let i = 0; i < pid.length; i++) {
        // Create parent -> [...child] map for *parent* pid

        let children = map.get(ppid[i]);
        console.log(children,i,ppid[i],pid[i], map.get(ppid[i]));

        if (children) {
            children.push(pid[i]);
        }
        else {
            map.set(ppid[i], [pid[i]]);
        }
    }

    // Use of queue of pending pids to search for, and build the
    // list of processes to kill into res. 
    let queue = [kill];
    let queueTail = 0;

    while (queueTail < queue.length) {
        let item = queue[queueTail];

        // Get children of item
        let children = map.get(item);

        // If there is any children, add them to the queue to continue to search 
        console.log("children: ",children);
        if (children) {
//            queue.push(...children);
            queue.push(children[0]);
        }

        queueTail++;
    }

    return queue;
};

var pid =  [1, 3, 10, 5],
ppid = [3, 0, 5, 3],
kill = 5;

console.log(killProcess(pid,ppid,kill));