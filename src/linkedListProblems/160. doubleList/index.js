/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let [pointerA, pointerB] = [headA, headB] 
    let isIntersection = false

    while(pointerA?.val){
        let pointerTrack = pointerA
        pointerB = headB
        while(pointerB?.val){
            if(pointerTrack == pointerB){
                isIntersection = true
                pointerTrack = pointerTrack.next
            } else if (isIntersection){
                isIntersection = false
                break
            }
            pointerB = pointerB.next
        }
        if(isIntersection){
            return pointerA
        }
        pointerA = pointerA.next
    }
    
    return null
};