

class WordDictionary {

    constructor (){
        this.root = new Map()
    }

    addWord(word = ""){
        let focus = this.root
        for(let key of word.split("")){
            if(!focus.has(key)){
                focus.set(key, new Map())
            }
            focus = focus.get(key)
        }
        focus.set("word", true)
    }

    searchWord(word = "") {
        let focus = this.root
        let wordArray = word.split("")
        return this.searchRecursive(focus, wordArray, 0)
    }

    searchRecursive(focus = {}, wordArray = [], index){
        for(let i = index; i< wordArray.length; i++){
            let key = wordArray[i]
            if(key == "."){
                for(let entry of focus.keys()){
                    let found = this.searchRecursive(focus.get(entry), wordArray, i)
                    if(found){
                        return true
                    }
                }
                return false
            } else {
                if(focus.has(key)){
                    focus = focus.get(key)
                } else {
                    return false
                }
            }
        }
        return focus.has("word")
    }

}