/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let auxStack = []
    let greaterElement = new Map()
    let response = []

    for(let num of nums2){
        if(auxStack.length > 0){
            while(num > auxStack.at(-1)){
                greaterElement.set(auxStack.pop(), num)
            }
        }
        auxStack.push(num)
    }

    for(let num of nums1){
        if(greaterElement.has(num)){
            response.push(greaterElement.get(num))
        } else {
            response.push(-1)
        }
    }
    return response
};