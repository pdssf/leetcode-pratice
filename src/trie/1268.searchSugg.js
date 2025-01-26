function suggestedProducts(prod, search) {
    const trie = new Trie(prod);
    let similar = [];
    let focus = trie.returnTrie();
    for (let char of search.split("")) {
      if (focus[char]) {
        focus = focus[char];
        similar.push(focus.similar);
      } else {
          while(similar.length < search.length){
              similar.push([])
          }
          break
      }
    }
    return similar;
  }
  
  class Trie {
    constructor(dict) {
      // array of words
      this.trie = {
        similar: [],
      };
      dict.sort()
      for (let word of dict) {
        let focus = this.trie;
        for (let char of word) {
          if (!focus[char]) {
            focus[char] = {
              similar: [],
            };
          }
          focus = focus[char];
          if(focus.similar.length <3){
              focus.similar.push(word);
          }
        }
      }
    }
  
    returnTrie() {
      return this.trie;
    }
  }