
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2)  {
    let carr = 0
    let res = null
    let head = null
    l1 = reverseList(l1)
    l2 = reverseList(l2)
    while(l1 != null || l2 != null || carr) {
        let sum = 0
        if(l1){
            sum+=l1.val
            l1 = l1.next
        }
        if(l2){
            sum+=l2.val
            l2 = l2.next
        }
        sum+=carr
        carr = 0
        if(sum > 10){
            sum = sum - 10
            carr = 1
        }
        node = new ListNode(sum)
        if(!res){
            head = node
            res = head
        } else{
            res.next = node
            res = node
        }
    }
    return reverseList(head)
};

