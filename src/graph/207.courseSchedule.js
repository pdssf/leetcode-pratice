/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let deps = new Array(numCourses)
    let done = []
    for(let e of deps){
        e = new Set()
    }

    for(let e of prerequisites){
        deps[e[0]].add(e[1])
    }

    let noDeps = []

    for(let e of deps){
        if(e.size == 0){
            noDeps.push(i)
            done.push(i)
        }
    }

    while(noDeps.length > 0){
        let matter = noDeps.pop()
        for(let e of deps){
            if(e.delete(matter) && e.size == 0){
                let i = deps.indexOf(e)
                noDeps.push(i)
                done.push(i)
            }
        }
        if(done.length == numCourses){
            return true
        }
    }
    return false
};

