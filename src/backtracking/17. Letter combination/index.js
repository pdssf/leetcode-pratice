
var letterCombinations = function(digits) {
    let mapComb = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz" 
    }

    let ans = []

    function evaluate (index, partial = "") {

        if(partial.length >= digits.length){
            ans.push(partial)
            return
        }
        console.log(mapComb[digits[index]].split(""))
        const charArray = mapComb[digits[index]].split("")
        for(let char of charArray){
            partial+=char
            evaluate(index+1, partial)
            partial = partial.slice(0,-1)
        }
    }
    
    evaluate(0, "")
    return ans
};

console.log(letterCombinations(""))

/*
    goal: to form all possible outcome given a number sequence
    choices: for each slot, we fill with the corresponding on the map
    constraints: the values in the map, the size of the entry

*/


/* 


1 - avaliar a primeira posição com todos os valores possíveis
2 - Para cada valor possível, chamar a mesma função para avaliar a posição seguinte
3 - quando chegarmos ao tamanho da entrada, empilha e retorna
*/