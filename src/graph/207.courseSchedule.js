/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish2 = function(numCourses, prerequisites) {
    // create graph with adjacency list
    let deps = Array.from({length: numCourses}, () => new Set())
    let done = []

    // mount graph
    for(let e of prerequisites){
        deps[e[0]].add(e[1])
    }

    let noDeps = []

    // create list of nodes with no incoming edges 
    deps.forEach((e, i) => {
        if(e.size == 0){
            done.push(i)
            noDeps.push(i)
        }
    })

    // visit the graph (array done) and put the resulting node in the list to be visited
    // if there is no other adjacent 
    while(noDeps.length > 0){
        let course = noDeps.pop()
        for(let i=0; i<deps.length; i++){
            if(deps[i].has(course)){
                deps[i].delete(course)
                if(e.size == 0){
                    noDeps.push(i)
                    done.push(i)
                }
            }
        }
    }
    return done.length == numCourses
};


function canFinish (numCourses, prerequisites) {
    // approach  using in-degree
    let inDegree = Array.from({length: numCourses})
    let adjacency = Array.from({length: numCourses}, () => [])
    let noDeps = []

    for(let [u,v] of prerequisites){
        adjacency[v].push(u)
        inDegree[u]++
    }

    inDegree.forEach((e,i) => {
        if(e == 0){
            noDeps.push(i)
        }
    })
    let coursesTaken = 0
    while(noDeps.length > 0) {
        let course = noDeps.pop()
        coursesTaken++
        for(let node of adjacency[course]){
            inDegree[node]--
            if(inDegree[node] == 0) {
                noDeps.push(node)
            }
        }
    }
    return coursesTaken == numCourses
}