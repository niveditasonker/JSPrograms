/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

var insert = function(head, insertVal) {
    if (!head) {
        head = new Node(insertVal, null);
        head.next = head;
        return head;
    } 
    
    let prev = head;
    let next = head.next;
    let inserted = false;    
    
     while (true){
        if ((prev.val <= insertVal && insertVal <= next.val) ||
            (prev.val > next.val && insertVal < next.val) ||
            (prev.val > next.val && insertVal > prev.val)) {
            prev.next = new Node(insertVal, next);
            inserted = true;
            break;
        } 
        prev = prev.next;
        next = next.next;
        if (prev == head) break;         
     }
    
    if (!inserted){
        prev.next = new Node(insertVal, next);
    }
    return head;
}