
class LinkedNode {
    constructor (value) {
        this.value = value
        this.next = null
    }

    nextNode (index) {
        if(index == 0) {
            return this
        } else {
            let i = index
            let node = this
            while(i > 0){
                if(node.next == null){
                    return null
                }
                node = node.next
                i--
            }
            return node
        }
    }
}

class DoubleLinkedNode extends LinkedNode {
    constructor (value) {
        this.value = value
        this.next = null
        this.previous = null
    }

    previousNode (index){
        if(index == 0) {
            return this
        } else {
            let i = index
            let node = this
            while(i > 0){
                if(node.previous == null){
                    return null
                }
                node = node.previous
                i--
            }
            return node
        }
    }
}

class DoubleLinkedList {
    /**
     * 
     * @param {DoubleLinkedNode} node 
     */
    constructor (node) {
        if(node){
            this.head = node
        } else {
            this.head = null
        }
    }

    /**
     * 
     * @returns {DoubleLinkedNode}
     */
    getTail(){
        if(this.head){
            let lastNode = this.head
            while(lastNode.next){
                lastNode = lastNode.next
            }
            return lastNode
        } else {
            return null
        }
    }

    /**
     * 
     * @param {Number} index 
     * @returns {DoubleLinkedNode}
     */
    getFromPosition (index){
        if(this.head){
            let node = this.head.nextNode(index)
            return node
        } else {
            return null
        }
    }

    /**
     * 
     * @param {DoubleLinkedNode} node 
     */
    append (node){
        if(this.head){
            //travel to the end of the list
            let lastNode = this.getTail()
            lastNode.next = node
            node.previous = lastNode
        } else {
            this.head = node
        }
    }

    /**
     * 
     * @param {number} pos 
     */
    removeFromPosition(index){
        let deadNode = this.getFromPosition(index)
        if(!deadNode){
            throw new Error("index out of bounds")
        }
        let nextNode = null
        let previousNode = null
        if(deadNode.next){
            nextNode = deadNode.next
        }
        if(deadNode.previous){
            previousNode = deadNode.previous
        }
        previousNode?.next = nextNode
        nextNode?.previous = previousNode
    }

    /**
     * 
     * @param {DoubleLinkedNode} node 
     * @param {Number} index 
     * @returns 
     */
    insertAtPosition (node, index) {
        if(!this.head){
            return this.append(node)
        } else {
            const currentIndexNode = this.head.nextNode(index)
            if(!currentIndexNode){
                throw new Error("index out of bounds")
            }
            let previousNode = currentIndexNode.previous
            if(previousNode){
                previousNode.next = node
                node.previous = previousNode
            }
            node.next = currentIndexNode
            currentIndexNode.previous = node
            if(index == 0){
                this.head = node
            }
        }
    }
}

