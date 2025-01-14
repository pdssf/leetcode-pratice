
function rotate(matrix = [[]]){
    let temp = 0 
    let len = matrix.length >> 1

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const element = matrix[i][j];
            temp = matrix [j][i]
            matrix[i][j] = temp
            matrix[j][i] = element
        }
        
    }

}