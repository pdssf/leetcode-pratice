// import { Heap } from "./heap";

function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * 10000) + 2;
        array.push(randomNumber);
    }
    return array;
}

/**
 * Merges two sorted Arrays
 * @param {Array} array1 
 * @param {Array} array2 
 */
function merger (array1, array2){
    let len1 = array1.length
    let len2 = array2.length
    let aux = new Array(len1 + len2)
    let pointer1 = pointer2 = 0
    let pos = 0
    while(pointer1<len1 || pointer2 < len2){
        if( pointer2 == len2 || pointer1 < len1 && array1[pointer1] < array2[pointer2]){
            aux[pos++] = array1[pointer1++]
        } else {
            aux[pos++] = array2[pointer2++]
        }
    }
    return aux
}


/**
 * The idea of merge sorte is divide to conquer
 * @param {Array} array 
 */
function mergeSort (array) {
    let len = array.length
    if(len < 2){
        return [array[0]]
    }
    let firstHalf = mergeSort(array.slice(0, len >>1))
    let lastHalf = mergeSort(array.slice(len >>1, len))
    return merger(firstHalf, lastHalf)
}

function mergeSortHelper (array){
    console.time("Sorting with mergesort")
    let a = mergeSort(array)
    console.timeEnd("Sorting with mergesort")
    return a
    // Sorting with mergesort: 270.018ms
}
// console.log(mergeSortHelper(generateRandomArray(6)))


/**
 * A ideia é colocar os de menor valor no inicio do array, 
 * assim, temos um for para percorrer, e outro para comparar.
 * @param {Array} array 
 */
function selectionSort (array) {
    console.time("selection sort")
    for(let i = 0; i< array.length; i++){
        let smallIndex = i
        for(let j = i+1; j<array.length; j++){
            if(array[j] < array[smallIndex]){
                smallIndex = j
            }
        }
        if(smallIndex != i){
            [array[i], array[smallIndex]] = [array[smallIndex], array[i]]
        }
    }
    console.timeEnd("selection sort")
    return array
    // selection sort: 8:13.793 (m:ss.mmm) (1 mi)
}
// console.log(selectionSort(generateRandomArray(1000000)))


/**
 * The idea of bubble sort is to check two adjacent numbers, if element in
 * position is bigger than element in position + 1, we swap the elements. 
 * @param {Array} array 
 */
function bubbleSort (array) {
    let len = array.length
    let swap = false
    console.time("bubble sort")
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i -1; j++){
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swap = true
            }
        }
        if(!swap){
            break
        }
    }
    console.timeEnd("bubble sort")
    return array
}
// console.log(bubbleSort(generateRandomArray(10)))

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
    for(let i = Math.floor(length/2)-1; i >= 0; i--){
        heapify(array, i, length)
    }
}

function heapSort(array){
    console.time("sorting with heapsort")
    buildHeap(array)
    console.log(array)
    let heapSize = array.length
    for(let i = heapSize -1; i > 0; i--){
        [array[i], array[0]] = [array[0], array[i]]
        heapify(array, 0, i)
    }
    console.timeEnd("sorting with heapsort")
    return array
    // sorting with heapsort: 321.264ms
}

function partition (array, left, right){
    let pivo = array[left]
    let i = left - 1
    let j = right + 1
    while(1){
        do {
            i++
        }while(array[i] < pivo)
        do{
            j--
        }while(array[j] > pivo)
        if (i >= j) {
            return j;
        }
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function quickSort(array, left, right){
    if(left < right){
        let middle = partition(array, left, right)
        quickSort(array, left, middle)
        quickSort(array, middle+1, right)
    }
    return array
}

let arr = generateRandomArray(10)
console.log(quickSort(arr, 0, arr.length -1))

// console.log(heapSort(generateRandomArray(1000000)))

// [ 3164, 4892, 147, 5195, 5902, 984 ]
// [ 984, 4892, 147, 5195, 5902, 3164]
// [ 984, 147, 4892, 5195, 5902, 3164]
// 