

function checkSubarraySum (nums, k){
    let map = new Map()
    let prefix = 0
    for(let i =0; i< nums.length; i++){
        prefix+=nums[i]
        let mod = prefix%k
        if(map.has(mod)){
            if(i - map.get(mod) > 1){
                return true
            }
        } else {
            map.set(mod, i)
        }
    }
    return false
}



// k = 7
//  [23,2,4,6,6]
// P = 41
// {2, 4, 1, 0, 6}

/*

5 % 6 = 5

5 + 6 = 11 % 6 = 5

5 + 18 = 23 % 6 = 5

1 - create a hashmap Modulo -> position 
2 - for each element of the array
    2.1 - prefix sum everything
    2.2 - check the division
    2.3 - if the modulo exists in the map, we return true. 



*/
