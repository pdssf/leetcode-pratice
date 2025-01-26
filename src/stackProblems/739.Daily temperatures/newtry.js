

function dailyTemperatures (temps){ // [73,74,75,71,69,72,76,73]

    let stack = []
    let ans = new Array(temps-1)
    for(let i=0; i< temps-1; i++){
        while(stack.length > 0 && temps[stack.at(-1)]<temps[i]){
            let index = stack.pop()
            ans[index] = i - index
        }
        stack.push(i)
    }

    return ans.push(0)
}
