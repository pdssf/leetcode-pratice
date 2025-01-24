/**
 * @param {number[][]} points
 * @return {number}
 */
function manhattan (from = [], to = []){
    return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1])
}


function minCostConnectPoints(points = [[]]){
    if(points.length == 1){
        return 0
    }
    let unions = Array.from({
        length: points.length
    }, (_, i) => i)

    let edges = []

    for(let i=0; i< points.length - 1; i++){ // O(V^2)
        for(let j = i+1; j< points.length; j++){
            let weight = manhattan(points[i], points[j])
            edges.push([weight, i, j])
        }
    }
    
    edges.sort((a,b) => a[0]-b[0])
    // console.log({unions})
    const path = []
    let pathLen = 0
    let cost = 0
    for(const [weight, source, dest] of edges){
        if(unions[source] != unions[dest]){
            cost+=weight
            pathLen++
            if(pathLen >= points.length - 1){
                return cost
            }
            path.push([weight, source, dest])
            let newGroup = unions[dest]
            let oldGroup = unions[source]

            for(let i=0; i< unions.length; i++){
                if(unions[i] == oldGroup){
                    unions[i] = newGroup
                }
            }
        }
    }
    // console.log({path})
    return -1
}