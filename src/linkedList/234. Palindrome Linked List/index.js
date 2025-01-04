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
var isPalindromeBad = function(head) {
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

function isPalindrome (head){
    // using the rabbit turtle algorithm we find the middle of the list
    // we reverse the first part
    // the two parts should be equal
    if(!head?.next){
        return true
    }

    let slow = head
    let fast = head

    while(fast.next && fast.next.next){
        fast = fast.next.next
        slow = slow.next
    }

    let secHalf = reversell(slow.next)

    while(secHalf){
        if(head.val != secHalf.val){
            return false
        }
        head = head.next
        secHalf = secHalf.next
    }
    return true
}

function reversell(head){
    let curr = head
    let prev = null

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}