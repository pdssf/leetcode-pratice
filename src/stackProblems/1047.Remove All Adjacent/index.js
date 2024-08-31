var removeDuplicates = function(s) {
    const stack = []

    for(let char of s){
        if(stack.length > 0){
            if(stack[stack.length -1] == char){
                stack.pop()
                continue
            }
        }
        stack.push(char)
    }
    return stack.join('')
};
