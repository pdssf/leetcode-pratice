/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let set = {}
    let res = []
    for(let e of nums){
        if(set[a]){
            set[a]++
        } else {
            set[a] = 1
        }
    }
    let p1 = 0
    let p2 = nums.length

    while(p1 < p2){
        let complement = 0 - (p1+p2)
        if(set[complement]){

        }
    }
    return res
};



// 1 sort the array
// for the two external, search the complement using binary search
    // use a map value=>ocurrences
// if the sum is > 0 we decrease on the right, else, we increment the left
// 