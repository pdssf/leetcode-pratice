/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100, 
        'D': 500, 
        'M': 1000,
    }
    let counter = 0

    for(let i=0; i < s.length; i++){
        switch(s[i]){
            case 'I': 
                if(s[i+1] == 'X' || s[i+1] == 'V'){
                    let a = dic[s[++i]] 
                    counter += --a
                    i++
                } else {
                    counter += 1
                }
                break
            case 'X':
                if(s[i+1] == 'L' || s[i+1] == 'C'){
                    counter += dic[s[i+1]] - 10
                    i++
                } else {
                    counter += 10
                }
                break
            case 'C':
                if(s[i+1] == 'D' || s[i+1] == 'M'){
                    counter += dic[s[i+1]] - 100
                    i++
                } else {
                    counter += 100
                }
                break
            default:
                counter += dic[s[i]]
                break
        }
    }
    return counter
};