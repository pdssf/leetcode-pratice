function removeDuplicates (nums){
    let [s, f] = [0,1]
    let double = false
    while(f < nums.length){
        if(nums[s] == nums[f] && double){
            f++
        } else if(nums[s] == nums[f]) {
            nums[++s] = nums[f++]
            double = true
        } else {
            nums[++s] = nums[f++]
            double = false
            // f = s+1
        }
    }
    return s+1
}
