function numIslands (grid){
    let lines = grid.length
    let cols = grid[0].length

    let copy = new Array(lines)
    for(let i = 0; i< lines; i++){
        copy[i] = new Array(cols).fill(false)
    }

    function getNeigh(i,j){
        let positions = []
        if(i > 0){
            positions.push([i-1,j])
        }
        if(j>0){
            positions.push([i,j-1])
        }
        if(i < lines -1){
            positions.push([i+1,j])
        }
        if(j<cols -1){
            positions.push([i,j+1])
        }
        return positions
    }

    function dfs (i,j){
        /**
         * @todo: function to check limits and return neighbours
         */
        if(copy[i][j]){
            return
        }

        copy[i][j] = true
        if(grid[i][j] == "0"){
            return
        }

        let neighbours = getNeigh(i,j)

        for(let nei of neighbours){
            if(!copy[i][j]){
                dfs(nei[0],nei[1])
            }
        }
    }

    let islands = 0
    for(let i=0; i<lines; i++){
        for(let j=0; j<cols; j++){
            if(!copy[i][j] && grid[i][j] == "1"){
                islands++
                dfs(i,j)
            }
            copy[i][j] = true
        }
    }
    return islands
}