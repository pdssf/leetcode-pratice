const {
    MinPriorityQueue
  } = require('@datastructures-js/priority-queue');

  
function networkDelayTime (times, n, k){
    const minQ = new MinPriorityQueue()
    const distance = new Array(n+1).fill(Infinity)
    let graph = {}

    for (let i = 1; i <= n; i++) {
        graph[i] = {};
    }
    for (const [from, to, time] of times) {
        graph[from][to] = time;
    }
    distance[k] = 0;
    minQ.enqueue(k, 0)
    while(minQ.size() > 0){
        let node = minQ.dequeue().element
        if(distance[node] == Infinity){
            break
        }
        for (const neigh in graph[node]) {
            let newDist = distance[node] + graph[node][neigh]
            if(distance[neigh] > newDist){
                distance[neigh] = newDist
                minQ.enqueue(neigh, newDist)
            }
        }
    }
    const max = Math.max(...distance.slice(1))
    return max == Infinity? -1:max
}
