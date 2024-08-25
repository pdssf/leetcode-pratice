/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function linkedListLen (head){
    let len = 0
    while(head){
        len++
        head = head.next
    }
    return len
}

function getNodeAt(head, index){
    node = head
    for(let i = 0; i<index; i++){
        node = node.next
    }
    return node
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if(!head?.next){
        return head
    }

    const listLen = linkedListLen(head) // O(n)
    let nodeAtk = getNodeAt(head, k-1) // O(n)
    let nodeMinusK = getNodeAt(head, listLen-k) // O(n)
    const temp = nodeAtk.val
    nodeAtk.val = nodeMinusK.val
    nodeMinusK.val = temp
    return head
};