
function maxVowels (s, k){
    let vowels = new Set(); 
    ["a", "e", "i", "o", "u"].forEach(element => {
        vowels.add(element)
    });
    let max = 0
    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])){
            max++
        }
    }
    let j = 0
    let curV = max

    for(let i = k; i<s.length; i++){
        if(vowels.has(s[j])){
            curV--
        }
        if(vowels.has(s[i])){
            curV++
        }
        max = Math.max(curV, max)
        j++
    }
    return max
}