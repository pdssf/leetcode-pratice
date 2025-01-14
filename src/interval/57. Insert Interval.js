



var insert = function(intervals = [], newInterval = []) {
    let stack = []
    let newIntervalInserted = false
    if(intervals.length == 0){
        return [newInterval]
    }
    for(let i=0; i<intervals.length; i++){
        if(newInterval[1] < intervals[i][0]){
            stack.push(newInterval)
            stack.push(intervals.slice(i))
            break
        } else if(newInterval[0] > intervals[i][1]){
            stack.push(intervals[i])
        } else {
            newIntervalInserted = true
            let start = Math.min(intervals[i][0], newInterval[0])
            let end = Math.max(intervals[i][1], newInterval[1])
            stack.push([start, end])
            for(let j = i+1; j<intervals.length; j++){
                let top = stack.at(-1) 
                if(top[1] >= intervals[j][0]){
                    stack.at(-1)[1] = Math.max(top[1], intervals[j][1])
                } else {
                    stack.push(intervals[j])
                }
            }
            return stack
        }
    }
    if(!newIntervalInserted){
        stack.push(newInterval)
    }
    return stack
};

// intervals: [[1,5]]

// newInterval: [6,8]
// 
// stack: 