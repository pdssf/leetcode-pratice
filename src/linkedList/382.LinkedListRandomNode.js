
class Solution {
    constructor (head){    
        this.head = head
    }

    /**
     * getRandom using reservoir sampling O(1) space
     * @returns number
     */
    getRandom () {
        let sample = null
        let count = 0 
        let node = this.head

        while(node){
            count++
            if(Math.random() < 1/count){
                sample = node.val
            }
            node = node.next
        }
        return sample || this.head.val
    }
}
