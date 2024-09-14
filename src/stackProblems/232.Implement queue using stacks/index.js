

class MyQueue {
    constructor (){
        this.mainStack = []
        this.auxStack = []
    }
    /** 
    * put element at the end of the main stack
    * @param {number} x
    * @return {void}
    */
    push(x) {
        while(this.auxStack.length > 0){
            this.mainStack.push(this.auxStack.pop())
        }
        this.mainStack.push(x)
    };

    /**
    * remove element from the main stack (botton)
    * @return {number}
    */
    pop() {
        while(this.mainStack.length > 0){
            this.auxStack.push(this.mainStack.pop())
        }
        return this.auxStack.pop()
    };


    /**
    * @return {number}
    */
    peek() {
        while(this.mainStack.length > 0){
            this.auxStack.push(this.mainStack.pop())
        }
        return this.auxStack.at(-1)
    };

    /**
    * @return {boolean}
    */
    empty() {
        return this.auxStack.length === 0  && this.mainStack.length === 0
    };
}



