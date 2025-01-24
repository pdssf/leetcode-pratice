

// usando 3 ponteiros 
// current, next and previous
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
var reverseList = function(head) {
    let previous = head
    let current = head.next
    while(current){
        let next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
};