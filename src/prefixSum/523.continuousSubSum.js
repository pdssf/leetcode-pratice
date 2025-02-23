
function checkSubarraySum (nums, k){
    if(nums.length < 2){
        return false
    }
    let map = {}
    let counter = 0
    map[0] = -1
    for(let i=0; i< nums.length; i++){
        counter += nums[i]
        let modulo = (counter)%k
        if(map[modulo]!=null){
            if(i - map[modulo] > 1){
                return true
            }
        } else {
            map[modulo] = i
        }
    }
    return false
}


console.log(checkSubarraySum([23,2,4,6,7], 6))

/**
 * [23,2,4,6,6]
 *   
 * couter = 35
 * map = [3,2,0,_,1,_]
 * 
 * 
 */


// N % M = Z
// K % M = Z <=> k = (N + X*M) 