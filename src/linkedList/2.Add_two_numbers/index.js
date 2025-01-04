
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2)  {
    let carr = 0
    let res = null
    let head = null
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
        if(sum > 9){
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
    return head
};