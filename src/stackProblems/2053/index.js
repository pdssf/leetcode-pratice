
var kthDistinct = function(arr, k) {
    let unique = new Map()
    let stack = []
    for(let i of arr){
        if(unique.has(i)){
            unique.set(i, false)
        } else {
            unique.set(i, true)
        }
    }
    for(let i of arr){
        if(unique.get(i)){
            if(stack.length >= k-1){
                return i
            }
            stack.push(i)
        }
    }
    return ""
};
