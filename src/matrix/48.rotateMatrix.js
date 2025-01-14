
function rotate(matrix = [[]]){
    let temp = 0 
    let len = matrix.length

    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            const element = matrix[i][j];
            temp = matrix [j][i]
            matrix[i][j] = temp
            matrix[j][i] = element
        }
    }
    for(let row of matrix){
        row.reverse()
    }
}