
/**
 * A function to find the middle of the list
 * @param {LinkedNode} node
 */
function middleNode(node){
    let jumpper = node
    let doubleJumper = node
    while(doubleJumper?.next){
        jumpper = jumpper.next
        doubleJumper = doubleJumper.next.next
    }
    return jumpper
}
