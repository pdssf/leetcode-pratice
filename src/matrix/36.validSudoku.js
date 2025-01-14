/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i=0; i< 9; i++){
        if(!isValidLine(board,i)){
            return false
        }
    }
    
    for(let i=0; i< 9; i++){
        if(!isValidColumn(board,i)){
            return false
        }
    }
    
    for(let i=0; i< 9; i++){
        if(!isValidGrid(board,i)){
            return false
        }
    }
    return true

}

function isValidLine(board, line) {
    let memo = new Array(10).fill(false)
    for(let e of board[line]){
        if(e != "." && memo[e] == true){
            return false
        }
        memo[e] = true
    }
    return true
}

function isValidColumn(board, column){
    let memo = new Array(10).fill(false)
    for(let i = 0; i<9; i++){
        if(board[i][column] != "." && memo[board[i][column]] == true){
            return false
        }
        memo[board[i][column]] = true
    }
    return true
}

function isValidGrid (board, grid){
    let beginC = 3 * (grid%3)
    let endC = beginC + 3
    let beginL = 3* Math.floor(grid/3)
    let memo = new Array(10).fill(false)

    for(let i = beginL; i < beginL+3; i++){
        for (let j = beginC; j < endC; j++) {
            const element = board[i][j];
            if(element != "." && memo[element] == true){
                return false
            }
            memo[element] = true
        }
    }
    return true
}


