

function rob (nums){
    let size = nums.length
    
    let memo = new Array(size).fill(-1)

    function helper(i){
        if(i >= size){
            return 0 
        }

        if(memo[i] == -1){
            let robThis = nums[i] + helper(i+2)
            let ignoreThis = helper(i+1)
            memo[i] = Math.max(robThis, ignoreThis)
        }

        return memo[i]
    }

    return helper(0)

}