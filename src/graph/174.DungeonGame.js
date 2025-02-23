const { MaxPriorityQueue } = require("@datastructures-js/priority-queue")


function calculateMinimumHP(dungeon){

    let minHp = 0 // tracks the initial hp required 
    let pq = new MaxPriorityQueue()
    let directions = [[0,1], [1,0]]

    // Array.from({length: rows}, () => new Array(cols).fill(Infinity))

    function primMst(){
        let start = [0,0]
        let mst = {}
        let cols = dungeon[0].length
        let lines = dungeon.length
        let newNodes = Array.from({ length: rows}, () => new Array(cols).fill(0))
        minHp = dungeon[0][0]
        mst[start.toString()] = {} // { "0,0" = {}}

        newNodes[0][0] = dungeon[0][0]
        
        let [i,j] = start
        if(i<lines){
            pq.enqueue(`${[i+1,j]}`, dungeon[i+1][j])
        }
        if(j<cols){
            pq.enqueue(`${[i,j+1]}`, dungeon[i][j+1])
        }
        
        while(!pq.isEmpty()){
            let {element, priority} = pq.dequeue()
            
            if(newNodes[element[0]][element[1]]!=0){
                continue
            }
            
            if(element[0] > 0){

            }


        }
        return Math.min(newNodes[cols-1][lines-1] * (-1) + 1, 1)
    }


    return primMst()
}


/**
 * Using PRIM`s to generate MST
 * 1 - Each (i,j) is a node, and dungeon[i][j] is the cost to go to this dungeon. 
 * 2 - we want to minimize the damage, so choose always the bigger cost (positive means he gains HP)
 * 3 -  
 */



console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))


