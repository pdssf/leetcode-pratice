
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    let result = 0
    for(let token of tokens){
        switch(token){
            case "+":
                result = stack.pop() + stack.pop()
                break
            case "-":
                let op1 = stack.pop() 
                result = stack.pop() - op1
                break
            case "*":
                result = stack.pop() * stack.pop()
                break
            case "/":
                let op2 = stack.pop() 
                result = parseInt(stack.pop()/op2, 10)
                break
            default:
                result = parseInt(token, 10)
            }
            stack.push(result)
    }
    return result
};

console.log(evalRPN(["4","13","5","/","+"]))