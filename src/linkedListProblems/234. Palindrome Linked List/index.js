/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = []
    let node = head
    let length = 0

    while(node!=null){
        length++
        node = node.next
    }

    node = head
    let middle = Math.floor(length/2)

    for(let i=0; i<middle; i++){
        stack.push(node.val)
        node = node.next
    }
    if(length%2 != 0){
        node = node.next
    }
    while(node!=null){
        if (stack.pop()!= node.val){
            return false
        }
        node = node.next
    }
    return true
};