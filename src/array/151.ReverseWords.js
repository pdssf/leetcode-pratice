

function reverseWords (s = ''){ 
    let newStr = ''
    let size = s.length - 1
    for(let i = size; i>=0; i--){
        if(s[i] != ' '){
            let j = i
            while(j>=0 && s[j] != ' '){
                j--
            }
            if(newStr.length > 0){
                newStr = newStr.concat(' ')
            }
            newStr = newStr.concat(s.substring(j+1, i+1))
            i = j
        }
    }
    return newStr
}

console.log(reverseWords("the sky is blue"))

// "the sky is blue"
//           ^  

// 'blue'