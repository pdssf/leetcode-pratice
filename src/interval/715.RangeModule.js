
class RangeModule {

    constructor (){
        this.intervals = []
    }

    sort(){
        this.intervals.sort((a,b) => a[0] - b[0])
    }

    merge(){ 
        // @TODO: improve to do this implace 
        let size = this.intervals.length
        let newInterval = [this.intervals[0]]
        for(let i = 1; i < size; i++){
            let [l0,r0] = newInterval.at(-1)
            let [l1,r1] = this.intervals[i]
            if(r0 >= l1) { // we have an overlap
                let l = Math.min(l0, l1)
                let r = Math.max(r0, r1)
                newInterval.pop()
                newInterval.push([l,r])
            } else { // Non overlaping
                newInterval.push([l1,r1])
            }
        }
        this.intervals = newInterval
    }

    addRange(left, right){
        this.intervals.push([left, right])
        // 1 - intervals does note overlap
        // 2 - intervals partially overlap
        // 3 - intervals totaly overlap
            // 3.1 - new interval swallow current intervals
            // 3.2 - new interval is swallowed by current intervals 
        this.sort()
        this.merge()
    }

    queryRange(left, right){
        //@TODO: use binarySearch
        let size = this.intervals.length

        for(let i = 0; i<size; i++){ //O(N)
            let [l,r] = this.intervals[i]
            if(left>=l && right<r){
                return true
            } else if (r > left){
                return false
            }
        }
        return false
    }

    removeRange(removeL, removeR){
        let size = this.intervals.length
        let newInterval = []
        // situations:
        // removing full interval
        // removing partial from 2 intervals
        // removing several intervals 
        // 
        for(let i =0; i< size; i++){
            let [interL, interR] = this.intervals[i]
            if(removeL < interR){ //removing starts before this interval, ends somewhere
                newLeft = Math.max(interL, removeL)
                n
                

            } else if(removeL <= interL && interR >= removeR) { // removing starts nowere but ends here

            } else if(){

            }
        }
    }

}