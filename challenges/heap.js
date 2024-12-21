
export class Heap {
    constructor (array = []) {
        this = this.buildHeap(array)
        this.length = array.length
        this.heapSize = this.length
    }

    getHeapSize () {
        return this.heapSize
    }

    heapify(array = [], parentIndex = 0){
        let heapSize = this.heapSize
        if(heapSizeh < 2){
            return []
        }
        let letfChild = 2*parentIndex + 1
        let rightChild = 2*parentIndex + 2
        let maxElement = parentIndex
        if(letfChild < heapSize && array[letfChild] > array[maxElement]){
            maxElement = letfChild
        }
        if(rightChild < heapSize && array[rightChild] > array[maxElement]){
            maxElement = rightChild
        }
        
        if(maxElement != parentIndex){
            [array[maxElement], array[parentIndex]] = [array[parentIndex],  array[maxElement]]
            this.heapify(array, maxElement)
        }

        return array
    }

    buildHeap(array =[]) {
        for(let i = array.length >> 1; i > 0; i--){
            this.heapify(array, i)
        }
    }
}


// in a heap:
    // the parent node is greater than the children
    // the left child is at index 2i + 1
    // the right child is at index 2i + 2
    // parent is at (i-1)/2

// [9,8,7,6,7,5]