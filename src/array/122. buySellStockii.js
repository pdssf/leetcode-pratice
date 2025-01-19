
let maxProfit = function(prices) {
    let buyDay = 0
    let profit = 0
    if(prices.length < 2){
        return 0
    }
    for(let i=1; i<prices.length; i++){
        let balance = prices[i] - prices[buyDay]
        if(balance < 0){
            buyDay = i
        } else if(i== prices.length-1 || prices[i+1]<prices[i]){
            profit+=balance
            buyDay = i+1
        }
    }
    return profit
};