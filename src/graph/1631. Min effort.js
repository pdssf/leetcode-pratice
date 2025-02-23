const {
    MinPriorityQueue
  } = require('@datastructures-js/priority-queue');


function minimumEffortPath(heights = [[]]){
    let rows = heights.length
    let cols = heights[0].length
    let pq = new MinPriorityQueue()
    let minEffort = Array.from({length: rows}, () => new Array(cols).fill(Infinity))
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    minEffort[0][0] = 0
    pq.enqueue([0,0], 0)

    let effort = 0

    while(!pq.isEmpty){
        let [x, y] = pq.dequeue().element
        let effort = minEffort[x][y]
        if(x == rows-1 && y == cols-1){
            return effort
        }

        for(let [dx, dy] of directions){
            let nx = x + dx
            let ny = y + dy
            if(nx >= 0 && nx < rows && ny >=0 && ny < cols){
                let newEffort = Math.abs(heights[x][y] - heights[nx][ny])
                let maxEffort = Math.max(newEffort, maxEffort)
                if(maxEffort < minEffort[nx][ny]){
                    minEffort[nx][ny] = maxEffort
                    pq.enqueue([nx,ny], maxEffort)
                }
            }
        }
    }
    return -1
}