/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let size = nums.length
    let left = new Array(size+1)
    let right = new Array(size +1)
    left[0] = 0
    right[size] = 0
    // [1,7,3,6,5,6] -> 6
    for(let i=0;i<size; i++){
        left[i+1] = nums[i] + left[i]
    }
    // L = [0,1,8,11, 17, 22, 28]

    for(let i = size; i>0; i--){ // 3
        console.log(i, nums[i-1], right[i])
        right[i-1] = nums[i-1] + right[i]
    }
    // R = [28,27,20,17,11,6,0]

    for(let i=0;i<size+1; i++){
        if(left[i] == right[i-1]){
            return i-1
        }
    }
    return -1
};


console.log(pivotIndex([2,1,-1]))