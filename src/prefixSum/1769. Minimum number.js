


function minOperations (boxes = []){
    let size = boxes.length
    let operations = new Array(size).fill(0)
    let seenBalls = 0
    let lastOp = 0
    for(let i=0; i<size; i++){
        operations[i] = lastOp + seenBalls
        lastOp+=seenBalls
        if(boxes[i] == '1'){
            seenBalls++
        } 
    }
    seenBalls = 0
    lastOp = 0
    for(let i=size-1; i>=0; i--){
        operations[i] += (lastOp + seenBalls)
        lastOp+=seenBalls
        if(boxes[i] == '1'){
            seenBalls++
        }
    }
    return operations
}

// prefix-sum:  

// cost to bring all the balls before + current number of balls (to move to current box)

//  0 0 1 0 1 1

//  0 0 0 1 2 2
// seen = 2
// lastops = 2


//  0 0 0 1 2 4
// 11 8 5 3 1 0

// balls = 2