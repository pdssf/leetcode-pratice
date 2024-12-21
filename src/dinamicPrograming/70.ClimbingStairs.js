/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = new Array(n+1).fill(-1);
 
    function recursion (step){
         if(step < 3) {
             return step
         }
         if(memo[step] > 0) {
             return memo[step]
         }
         memo[step] = recursion(step-1) + recursion(step-2)
         return memo[step]
    }
    return recursion(n)
 };
 
 