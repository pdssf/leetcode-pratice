
function mergeTwoLists (list1, list2) {
    let head 
    if(list1.val < list2.val){
        head = list1
        list1 = list1.next
    } else {
        head = list2
        list2 = list2.next
    }
    let tail = head
    while(list1 && list2){
        console.log({list1, list2})
        if (list1.val < list2.val){
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
    }

    if(list1){
        tail.next = list1
    } else {
        tail.next = list2
    }

    return head
};