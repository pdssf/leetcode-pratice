/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false
    }
    let fastPointer = head.next
    let slowPointer = head
    while(fastPointer && fastPointer.next){
        if(fastPointer == slowPointer){
            return true
        }
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
    }
    return false
};