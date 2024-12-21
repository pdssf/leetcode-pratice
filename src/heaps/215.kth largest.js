

function heapify(array = [], nodeIndex = 0, heapSize) {
    if(heapSize < 2){
        return array
    }
    let letfChild = 2*nodeIndex + 1
    let rightChild = 2*nodeIndex + 2
    let maxElement = nodeIndex
    if(letfChild < heapSize && array[letfChild] > array[maxElement]){
        maxElement = letfChild
    }
    if(rightChild < heapSize && array[rightChild] > array[maxElement]){
        maxElement = rightChild
    }
    
    if(maxElement != nodeIndex){
        [array[maxElement], array[nodeIndex]] = [array[nodeIndex],  array[maxElement]]
        heapify(array, maxElement, heapSize)
    }
    return array
}

function buildHeap(array =[]) {
    let length = array.length
    for(let i = Math.floor(length/2)-1; i >= 0; i--){ // i = 0
        heapify(array, i, length)
    }
}

function findKthLargest (array, k){
    buildHeap(array)
    let heapSize = array.length
    for(let i = heapSize -1; i >= heapSize - k; i--){
        [array[i], array[0]] = [array[0], array[i]]
        heapify(array, 0, i)
    }
    return array[heapSize - k]
}


// [6,5,4,3,2,1]
//    ˆ   L R
// Left = 5
// Right = 6
// Length = 6