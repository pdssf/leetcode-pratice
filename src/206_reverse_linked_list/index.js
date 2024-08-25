

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
    if(!head || !head.next){
        return head
    }
    let previous = head
    let current = head.next
    let next = head.next.next
    previous.next = null
    do{
        current.next = previous
        previous = current
        current = next
        next = next?.next
    }while(current != null)
    return previous
};