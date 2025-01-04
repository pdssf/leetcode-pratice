/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if(!head?.next){
        return head
    }

    let current = head
    let next = null
    let doubleNext = null
    let newHead = current.next
    while(current?.next){
        next = current.next
        doubleNext = next.next
        current.next = doubleNext?.next || doubleNext
        next.next = current
        current = doubleNext
    }
    return newHead
};

// [1, 2, 3]
//  C  N  D
// [2,1,4,3]