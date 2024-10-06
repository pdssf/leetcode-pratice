
/**
 * given a number n, return all binaries with n bits 
 * @param {number} n 
 */
function binaryCount(n, word){
    if(word?.length == n){
        console.log(word)
        return
    }

    for(let char of [0,1]){
        binaryCount(n, word + char)
    }
}

// binaryCount(3, "")


function subsets(array, index, partial){
    // console.log(partial)
    if(index >= array.length){
        return [partial]
    }
    let inSolution = subsets(array, index+1, partial.concat([array[index]]))
    let outSolution = subsets(array, index+1, partial)
    return [...inSolution, ...outSolution]
}

// console.log("end: ", subsets([], 0, []))
console.log("end: ", subsets2([1,2,3], 0, []))