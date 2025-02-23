/**
 * Você tem um método que recebe um numero flutuante. Deve armazenar esse numero e,
 * se houverem 3 números que, combinados, estejam dentro de uma certa distancia,
 * Deve imprimir essa tripla, e remover esses numeros da lista.
 *
 */

/**
 * Q:
 * 1 - numbers positive and negatives? 
 * 2 - how about equal numbers ?  
 */


class Solution {
    constructor (range, distance){
        this.list = []
        this.range = range || 3
        this.distance = distance || 5
    }

    insert(number = 0){
        this.list.push(number)
        this.list.sort((a,b) => a-b) // time: O(N log(N)) ; space: O(1)
        this.checkTripplets()
    }

    checkTripplets(){
        let size = this.list.length - 3
        let newList = []
        console.log(this.list, size)
        if(size < 2){
            return
        }
        for(let i =0; i< size; i++){ // time O(N) ; space: O(N)
            let j = i + this.range
            if(Math.abs(this.list[i] - this.list[j]) <= this.distance){
                console.log(this.list.slice(i, j))
                i = j
            } else {
                newList.push(this.list[i])
            }
        }
        this.list = newList.length > 0 ? newList : this.list
    }
}

const solution = new Solution(3, 5);
solution.insert(1);
solution.insert(4);
solution.insert(6);
solution.insert(10);
solution.insert(12);
solution.insert(15);

console.log("Final list:", solution.list);