/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    function generate(stt,end){
        if(stt > end){
            return null
        }
        let middle = (stt+end) >> 1
        let root = new TreeNode(nums[middle])
        root.left = generate(stt,middle-1)
        root.right = generate(middle+1, end)
        return root
    }
    return generate(0, nums.length-1)
}