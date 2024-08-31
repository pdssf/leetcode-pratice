
// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have 
// to wait after the ith day to get a warmer temperature. If there is no future 
// day for which this is possible, keep answer[i] == 0 instead.

const top = arr => {
    return arr[arr.length - 1]
}

var dailyTemperatures = function(temperatures) {
    let stack = []
    let results = (new Array(temperatures.length)).fill(0)
    for(let i = 0; i<temperatures.length; i++){
        while(stack.length > 0 && temperatures[top(stack)] < temperatures[i]){
            const top = stack.pop()
            results[top] = i - top
        }
        stack.push(i)
    }
    return results
};
