

function coinChange (coins, amount){

    let queue = [[0,0]] // amount, steps
    let visited = new Set()

    while(queue.length > 0){
        let [amount, steps] = queue.shift()
        for(let coin of coins){
            let newAmount = amount + coin
            if(!visited.has(newAmount)){
                if(newAmount == amount){
                    return steps+1
                }
                visited.add(newAmount)
                queue.push([newAmount, steps+1])
            }
        }
    }
    return -1
}

// 1.	Initialize a queue with (currentAmount, steps) = (0, 0).
// 2.	Maintain a visited set to track processed amounts.
// 3.	While the queue is not empty:
    // •	Dequeue the next (currentAmount, steps).
    // •	For each coin:
    // •	Calculate the new amount.
    // •	If it matches the target, return steps + 1.
    // •	If it’s valid (not visited and ≤ target), add it to the queue.
// 4.	If the target amount is not found, return -1.