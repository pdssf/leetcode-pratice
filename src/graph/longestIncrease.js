

/**
 * @param {number[][]} matrix
 * @return {number}
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
    let lines = matrix.length;
    let cols = matrix[0].length;
  
    let memo = new Array(lines);
    for (let i = 0; i < lines; i++) {
      memo[i] = new Array(cols).fill(0);
    }
  
    function checkPaths(i, j) {
      let directions = [[0,1],[1,0],[-1,0],[0,-1]]
      let dirList = []
      for(let [x,y] of directions){
          if(i+x >= 0 && i+x <lines && j+y >= 0 && j+y < cols){
              dirList.push([i+x, j+y])
          }
      }
      return dirList
    }
  
    function dfs(i, j) {
      if(memo[i][j] > 0){
          return memo[i][j]
      }
      
      let paths = checkPaths(i, j);
      let nodeValue = matrix[i][j];
      let maxSteps = 1;
      for (let [x,y] of paths) {
        if (matrix[x][y] > nodeValue) {
          maxSteps = Math.max(1+dfs(x, y), maxSteps);
        }
      }
      memo[i][j] = maxSteps
      return maxSteps;
    }
  
    let ans = 1;

    for (let i = 0; i < lines; i++) {
      // lines
      for (let j = 0; j < cols; j++) {
        //coluns
        ans = Math.max(dfs(i, j), ans); // O(N)
      }
    }
    return ans;
  }

console.log(longestIncreasingPath([[0],[1],[5],[5]]))