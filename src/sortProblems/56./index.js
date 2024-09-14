/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length
    intervals.sort((a,b) => a[0]-b[0])
    let res = []
    for(let i=0; i<len; i++){
        if(res.length>0){
            let peek = res.at(-1)
            if(peek[1]<intervals[i][0]){
                res.push(intervals[i])
            }else if (peek[1] < intervals[i][1]){
                res.pop()
                res.push([peek[0], intervals[i][1]])
            }
        } else {
            res.push(intervals[i])
        }
    }
    return res
};

const selectionSortTuple = (array) => {
    for(let i=0; i< array.length; i++){
        let small = i
        for(let j = i+1; j< array.length; j++){
            if(array[j][0] < array[small][0]){
                small = j
            }
        }
        [array[i], array[small]] = [array[small], array[i]]
    }
}