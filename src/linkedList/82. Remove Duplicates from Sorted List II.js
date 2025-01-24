


var deleteDuplicates = function(head) {
    let newhead = null
    let tail; let memo;

    if(!head || !head.next){
        return head
    }

    while(head && head.val == head.next?.val){
        let memo = head.val
        while(head && head.val == memo){
            head = head.next
        }
    }
    if(!head) {
        return null
    }

    newhead = head
    tail = newhead
    head = head?.next
    newhead.next = null

    while(head != null){
        if(head.val == head.next?.val){
            memo = head.val
            while(head && head.val == memo){
                head = head.next
            }
        } else {
            tail.next = head
            tail = tail.next
            head = head.next
            tail.next = null
        }
    }
    return newhead
}