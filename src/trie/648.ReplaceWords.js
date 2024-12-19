
function replaceWords (dictionary, sentence){
    let trie = new Map()

    for(let word of dictionary){
        let focus = trie
        for(let char of word.split("")){
            if(focus.has(char)){
                if(focus.has("root")){
                    break
                }
            } else {
                focus.set(char, new Map())
            }
            focus = focus.get(char)
        }
        if(!focus.has("root")){
            focus.set("root", word)
        }
    }

    let newSentence = ""
    let wordArray = sentence.split(" ")

    for(let i = 0; i<wordArray.length; i++){
        let word = wordArray[i]
        let focus = trie
        let foundRoot = false
        for(let char of word.split("")){
            if(focus.has(char)){
                focus = focus.get(char)
                if(focus.has("root")){
                    newSentence+= focus.get("root")
                    foundRoot = true
                    break
                }
            } else {
                newSentence+=word
                foundRoot = true
                break
            }
        }
        if(!foundRoot){
            newSentence+=word
        }
        if(i<wordArray.length-1){
            newSentence+=" "
        }
    }
    return newSentence
}
