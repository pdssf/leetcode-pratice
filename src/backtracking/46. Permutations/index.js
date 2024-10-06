

function permute (nums = [], partial = []){
    if(nums.length == partial.length){
        return [partial.slice()]
    }

    let sol = []
    for(let i = 0; i < nums.length; i++){
        if(!partial.includes(nums[i])){
            partial.push(nums[i])
            sol = sol.concat(permute(nums, partial))
            partial.pop()
        }
    }
    return sol 
}
