/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let response = []
    let len = nums.length
    for(let i = 0; i< len -2; i++){
        if(i>0 && nums[i] == nums[i-1]){
            continue
        }
        let left = i + 1
        let right = len - 1

        while(left < right){
            let complemento = nums[i] + nums[left] + nums[right]
            if(complemento == 0){
                response.push([nums[i], nums[left], nums[right]])
                left++
                while(nums[left] == nums[left-1] && left < right){
                    left++
                }
            } else if(complemento > 0){
                right--
            } else {
                left++
            }
        }
    }
    return response
};

// [-1,-1,0,1,2,-4]
// 