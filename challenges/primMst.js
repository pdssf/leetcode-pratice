const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function primMst (graph = { }, start){
    let mst = {}
    let notSeen = new Set()
    let pq = new MinPriorityQueue()

    for(let node in graph){
        notSeen.add(node)
    }
    for(let node in graph[start]){
        pq.enqueue({start, node}, graph[start][node])
    }
    notSeen.delete(start)
    while(!pq.isEmpty()){
        let {element, priority} = pq.dequeue()
        
        if(!notSeen.has(element.node)){
            continue
        }
        
        notSeen.delete(element.node)
        if(!mst[element.start]){
            mst[element.start] = {}
        }
        mst[element.start][element.node] = priority 
        if(notSeen.size == 0){
            return mst
        }
        for(let node in graph[element.node]){
            pq.enqueue({start: element.node, node}, graph[element.node][node])
        }
    }
    return mst
}


const graph = {
    C: { A: 4, B: 1, D: 3 },
    A: { B: 2, C: 4 },
    D: { B: 7, C: 3 },
    B: { A: 2, C: 1, D: 87 },
  };

  console.log(primMst(graph, 'B'))