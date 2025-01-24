

function topKFrequent(words, k){
    let freq = new Map()
    let arr = []
    for (const w of words) { // O(N)
        if(freq.has(w)){
            freq.set(w, freq.get(w) + 1)
        } else {
            freq.set(w, 1)
        }
    }
    freq.forEach((val, key) => arr.push([val, key])) // O(N)

    arr.sort((a,b) => { //O (n*l*log(N)) when all elements has the same frequency, L is the average size of the string
        if(a[0] != b[0]){ 
            return b[0] - a[0]
        } else {
            return (a[1] < b[1]? -1 : 1)
        }
    })
    return arr.slice(0,k).map(e => e[1])
}

console.log(topKFrequent(["leetcode","coding"], 3))