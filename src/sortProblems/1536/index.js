
const zerosAtEnd = function(array){
    let counter = 0
    for(let i = array.length-1; i>=0; i--){
        if(array[i] == 1){
            return counter
        }
        counter++
    }
    return counter
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    // step1: for each element, count the number of zeros at the end (stop when you reach 1).
    // step2: check position and array, in line I should be an array with n-I zeros 
    // step3: using bubble sort, try to move the arrays to the position it belongs 
    
    let n = grid.length
    let lastOne = []
    let counter = 0

    const swapper = (j) => {
        counter++
        [lastOne[j], lastOne[j-1]] = [lastOne[j-1], lastOne[j]]
    }

    for(let array of grid){
        lastOne.push(array.lastIndexOf(1))
    }
    for(let i = 0; i< n; i++){
        if(lastOne[i]>i){ //check if line is invalid
            let j = i+1
            while(lastOne[j] >i){ // seach for a valid line
                j++
                if(j >= n){
                    return -1
                }
            }
            do{ //swap line j with line j-1
                swapper(j)
                j--
            }while(j>i)
        }    
    }
    return counter
};



console.log(minSwaps([[1,0,0,0,0,0],[0,1,0,1,0,0],[1,0,0,0,0,0],[1,1,1,0,0,0],[1,1,0,1,0,0],[1,0,0,0,0,0]]))

// [1,0,0,0,0,0],
// [1,0,0,0,0,0]
// [0,1,0,1,0,0],
// [1,0,0,0,0,0],
// [1,1,1,0,0,0],
// [1,1,0,1,0,0],