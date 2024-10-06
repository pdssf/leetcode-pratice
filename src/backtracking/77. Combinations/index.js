


function combine (n,k, partial = []){   
    const len = partial.length
    if(len == k){
        return [partial.slice()]
    }
    let sol = []
    let last = len > 0 ? partial.at(-1) : 0
    if(n-last < k - len) {
        return sol
    }
    for(let i = last+1; i <=n; i++){
        partial.push(i)
        sol = sol.concat(combine(n, k, partial))
        partial.pop()
    }
    return sol
}

console.log(combine(4,3))
