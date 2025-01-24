

function reverseBetween (head, left, right){
    let b4 = head

    while(b4.next.val != left){
        b4 = b4.next
    }

    let left = b4.next
    let current = left.next
    
    while(current.val != right){
        let next = current.next
        current.next = left
        left = current
        current = next
    }
    
    b4.next = current
    return head
}