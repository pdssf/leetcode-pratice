

function canTransform (start = "", result = ""){

    let copy = start.append("")

    let isEqual = i => start[i] == result[i]

    let swap = (i, j) => [copy[i],copy[j]] = [copy[j], copy[i]]

    let size = start.length
    let countLeft = 0
    let countRight = 0
    for(let i = 0; i<size; i++){
        switch (start[i]){
            case 'L':
                countLeft++
                break
            case 'R':
                countRight++
                break
        }
        switch (result[i]){
            case 'L':
                countLeft--
                break
            case 'R':
                countRight--
                break
        }
    }

    if(countLeft !=0 || countRight != 0){ //different number of L and R on start and res
        return false
    }

    
}


/* 1º try: 
    - use dynamic programming to generate possibilities:
        - R can only go right
        - L can only go left
        - Check R and L have the same counting
        - two dimensions to check result and start, and swap elements

    Q: 
        The string always have just X, L and R char?
        The start and result always have the same lenght?
        Is there a minimum size of lenght?    
    
// RLRRL
// RLRRL
//
*/


/* 2º try:
    - Use graph (??)
        - 
*/

