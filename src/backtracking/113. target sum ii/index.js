

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, target){

    const ans = []

    function eval (root, values = []){
        if(!root){
            return []
        }
        values.push(root.val)
        let isLeaf = true
        if(root.left){
            eval(root.left, values)
            isLeaf = false
        }
        if(root.right){
            eval(root.right, values)
            isLeaf = false
        } 

        if(isLeaf) {
            const sum = values.reduce((partialSum, e) => partialSum+e, 0)
            if(sum == target){
                ans.push([...values])
            }
        }
        
        values.pop()
    }
    eval(root, [])
    return ans
}



/*
    goal: descobrir todos os caminhos onde a soma até a folha são iguais à target
    escolhas: 
    restrições: precisa ir até a folha
*/

/* 
    A função deve:
 1 - a partir de um nó leia seu valor e empilhe
 2 - recursivamente passe a pilha para uma nova instância da função e leia seus filhos
 3 - repita 1 e 2 até não haver mais filhos
 4 - verifique se a soma é igual a targuet
 5 - se sim, empilhe a pilha em ans
 6 - retorne 
*/