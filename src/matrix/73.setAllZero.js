

function setZeroes (matrix = []) {
    let line = new Set()
    let column = new Set()

    let len = matrix.length

    for(let i=0; i<len; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] == 0){
                line.add(i)
                column.add(j)
            }
        }
    }
    line.forEach(e => {
        setLine(matrix, e)
    })
    column.forEach(e => {
        setCol(matrix, e)
    })
    
    return matrix
};

function setLine(matrix, line){
    for(let j = 0; j< matrix.length; j++){
        matrix[line][j] = 0
    }
}

function setCol(matrix, col){
    for(let j = 0; j< matrix.length; j++){
        matrix[j][col] = 0
    }
}