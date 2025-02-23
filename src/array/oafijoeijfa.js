// A gente recebia um array e tinha que devolver dois indexes referentes ao início e o fim de um sub array.
// Esse sub array tinha a regra:
// •⁠  ⁠O primeiro elemento e o último tinham q ser iguais.
// •⁠  ⁠⁠Deveríamos retornar os indexes que tem a maior soma naquele sub array (caso tenha mais de uma opção).

// Exemplo: [1, 2, 3, 2, -10, 1]
// Aí teríamos q retornar um pair/tupla (1, 3) referente ao sub array [2, 3, 2]

// build map of equal elements, we will look for this further
// use prefix sum to sum all elements at an position
// store the sums and return the candidates


function solution (nums){ // [1, 2, 3, 2, -10, 1]
    let equals = {}
    let prefix = []
    for(let i = 0; i< nums.length; i++){ //O(N)
        let num = nums[i]
        if(equals[num] != undefined){
            equals[num].push(i)
        } else {
            equals[num] = [i]
        }
    }
    // {1: [0,5], 2: [1,3], 3: [2], -10: [4]}
    prefix[0] = nums[0]

    for(let i = 1; i< nums.length; i++){
        prefix[i] = prefix[i-1] + nums[i]
    }
    // [1, 3, 6, 8, -2, -1]
    let response = []
    let max = -Infinity

    for(let key in equals){
        let [start, end] = equals[key]
        
        if(!start || !end){ // if we have no pair
            continue
        }

        let sum = prefix[end] - prefix[start]
        if(sum > max){
            response = [[start, end]] 
            max = sum
        } else if(sum == max){
            response.push([start, end])
        }
    }
    return response //[[1,3]]
}

console.log(solution([1, 2, 3, 2, -10, 1]))




// Era uma questão pra achar uma palavra em uma matrix(ele chamada de Puzzle). Mas tinham algumas regras.
// •⁠  ⁠Você pode procurar as palavras em todas as direções(cima, baixo, esquerda, direita e diagonais), mas ela so pode ser iterado em uma direção(não pode fazer o conjunto de comandos “direita, baixo, direita”, por exemplo. Tem que ser “direita, direita, direita”, por exemplo).
// •⁠  ⁠⁠pode haver 1 caracter faltando

// Exemplo:
// [
// [a, b, c],
// [d, e, f],
// [g, h, i]
// ]
// “def” -> True
// “abg” -> True
// “bcfi” -> False