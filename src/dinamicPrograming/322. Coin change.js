

function coinChange(coins, target){
    if(target == 0) {
        return 0
    }
    let coinSet = [...coins.sort((a,b)=> b-a)]
    console.log({coinSet})
    function topDown (steps, amount, coin) {
        for(let i = coin; i<coinSet.length; i++){
            if(amount > coins[i]){
                let result = topDown(steps+1, amount - coins[i], i)
                if(result > 0){
                    return result
                }
            } else if(amount == coins[i]){
                return steps+1
            }
        }
        return -1
    }
    return topDown(0, target, 0)
}

// 11
// 
// steps = 3
// amount = 0
// bigCoin = 1