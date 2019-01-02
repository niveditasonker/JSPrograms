var numUniqueEmails = function(emails) {
    var set = new Set();
    
    for(let i=0;i<emails.length;i++){
        let tmp = emails[i].split('@')[0];
        tmp = tmp.replace(/\./g,'');
        if(tmp.includes('+')){
            let idx = tmp.indexOf('+');
            tmp = tmp.slice(0,idx);
        }
        console.log("tmp",tmp);
        if(!set.has(tmp)){
            set.add(tmp+emails[i].split('@')[1]);
        }
    }
    console.log(set);
    return set.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));