class Trie {
    constructor () {
        this.root = {}
    }

    insert (word = ""){
        let focus = this.root
        for(let char of word){
            if(!focus[char]){
                focus[char] = {}
            }
            focus = focus[char]
        }
        focus["word"] = word
    }

    search (word = ""){
        let focus = this.root
        for(let char of word){

            if(focus[char]){
                focus = focus[char]
            } else {
                return false
            }
        }
        if(focus["word"]){
            return true
        }
        return false
    }

    startsWith (prefix = ""){
        let focus = this.root
        for(let char of prefix){
            if(focus[char]){
                focus = focus[char]
            } else {
                return false
            }
        }
        return true
    }
}