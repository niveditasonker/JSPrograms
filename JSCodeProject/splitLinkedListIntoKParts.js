/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    var curr = root;
    let len = 0;
    let res = [];
    
    while(curr){
        len++;
        curr = curr.next;
    }
    
    curr = root;
    let parts = Math.floor(len/k);
    
    let rem = len - (parts*k);
    let prev;
    
    for(let i=0;i<k;i++){
        if(i<len){
            res.push(curr);
            for(j=0;j<parts;j++){
                prev = curr;
                curr = curr.next;
                rem--;
            }
            
            if(rem){
                prev = curr;
                curr = curr.next;
                rem--;
            }
            prev.next = null;
        }else{
            res.push(null);
        }
    }
    
    return res;
};