
function subsets (nums) {

    function helper(index, response){
        if(index >= nums.length){
            return [response]
        }
        let inSolution = helper(index+1, response.concat(nums[index]))
        let outSolution = helper(index+1, response)
        return [...inSolution, ...outSolution]
    }

    console.log("foi")
    return helper(0, [])
}

console.log(subsets([1,2,3]))