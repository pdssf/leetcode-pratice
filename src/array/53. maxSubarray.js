/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length
    let max = new Array(nums)

    max[0] = nums[0]

    for(let num = 1; num< len; num++){
        max[num] = Math.max(nums[num], nums[num] + max[num-1])
    }

    return Math.max(...max)
};