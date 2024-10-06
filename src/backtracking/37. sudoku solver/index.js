function solveSudoku (board = [[]], row = 0, column = 0) {
    let curVal = board[row][column]
    if(column > 8){
        if(row >=8){
            return board
        } else {
            return solveSudoku(board, row+1, 0)
        }
    }

    if(curVal == "."){
        for(let i = 1; i < 10; i++){
            if(evaluateSudokuPosition(board, row, column, i)){
                board[row][column] = `${i}`
                if(solveSudoku(board, row, column+1)!=false) {
                    return board
                }
                board[row][column] = "."
            }
        }
        board[row][column] = "."
    } else {
        return solveSudoku(board, row, column + 1)
    }
    return false
}

function evaluateSudokuPosition (board, row, column, value){
    return isvalidRow(board, row, value) 
        && isvalidColumn (board, column, value)
        && isValidBox(board, row, column, value)
}

function isvalidRow (board = [[]], row, e) {
    const has = board[row].includes(`${e}`)
    return !has
}

function isvalidColumn (board = [[]], column, e) {
    for(let i =0; i<9;i++){
        if(board[i][column] == `${e}`){
            return false
        }
    }
    return true
}

function isValidBox (board = [[]], row, column, e){
    let boxFirstLine = Math.floor(row/3) * 3
    let boxFirstCol = Math.floor(column/3) * 3
    for(let i = boxFirstLine; i < boxFirstLine + 3; i++){
        for(let j = boxFirstCol; j < boxFirstCol + 3; j++){
            if(board[i][j] == `${e}`){
                return false
            }
        }
    }
    return true
}


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solveSudoku = function(board) {
//     return solveSudoku(board)
// };


let a = solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])

console.log({a})

/**
 * Choices: what value will i put in an rowxcolumn?
 * Constraints: the sudoku rules 
 * Goal: solve sudoku 
 */

/* 
Algorith: Make a valid choice, pass to another instance, evaluate, 

1 - Make a valid choice.
2 - pass to another instance.
3 - if it returns true, you did your job.
4 - else, change number, and return to step 1. 


*/