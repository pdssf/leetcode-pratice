


class MinStack {

    constructor (){
        this.min = null
        this.content = []
    }

    push(val){
        this.content.push(val)
        this.min = this.min? Math.min(val, this.min) : val
    }

    pop(){
        return this.content.pop()
    }

    top(){
        return this.content.at(-1)
    }

    getMin(){
        return this.min
    }

}