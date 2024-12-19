

class Trie {
    constructor () {
        this.root = new Map()
    }

    insert (word = ""){
        let focus = this.root
        for(let char of word.split("")){
            if(focus.has(char)){
                focus = focus.get(char)
            } else {
                focus.set(char, new Map())
            }
        }
        focus.set("word", true)
    }

    search (word = ""){
        let focus = this.root
        for(let char of word.split("")){
            if(focus.has(char)){
                focus = focus.get(char)
            } else {
                return false
            }
        }
        if(focus.has(word)){
            return true
        }
        return false
    }

    startsWith (prefix = ""){
        let focus = this.root
        for(let char of prefix.split("")){
            if(focus.has(char)){
                focus = focus.get(char)
            } else {
                return false
            }
        }
        return true
    }
}