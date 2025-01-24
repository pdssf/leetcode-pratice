

function removeNthFromEnd(head, n){
    let pointer = {
        next: head
    }
    let previous = pointer
    let tail = pointer
    let count = 0

    if(!head.next){
        return null
    }

    while(count<=n){
        tail = tail.next
        count++
    }

    while(tail){
        tail = tail.next
        previous = previous.next
    }
    previous.next = previous.next.next
    return pointer.next
}