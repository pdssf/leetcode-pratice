const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function dijkstra(graph, origin) {
  const distances = {}; //
  const pq = new MinPriorityQueue(); // guides where we going
  for (const node in graph) {
    if (node == origin) {
      distances[node] = 0;
      pq.enqueue(node, 0);
    } else {
      distances[node] = Infinity;
      pq.enqueue(node, Infinity);
    }
  }

  while (!pq.isEmpty()) {
    let node = pq.dequeue().element;
    if (distances[node] == Infinity) {
      break;
    }

    for (let neigh in graph[node]) {
      let newDistance = distances[node] + graph[node][neigh];
      if (newDistance < distances[neigh]) {
        distances[neigh] = newDistance;
        pq.enqueue(neigh, newDistance);
      }
    }
  }
  return distances;
}

const graph = {
  C: { A: 4, B: 1, D: 3 },
  A: { B: 2, C: 4 },
  D: { B: 7, C: 3 },
  B: { A: 2, C: 1, D: 7 },
};

const shortestPaths = dijkstra(graph, "D");
console.log(shortestPaths);
