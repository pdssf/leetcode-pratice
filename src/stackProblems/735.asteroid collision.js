/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [] 
  
    for(let i = 0; i < asteroids.length; i++){
      if(stack.length == 0){
          stack.push(asteroids[i])
          continue
      }
      let top = stack.at(-1)
      let inc = asteroids[i]
      if(top > 0 && inc <0){
          while(top > 0 && inc <0){
              if(top == -1 * inc){
                  stack.pop()
                  inc = 0
                  break
              } else if(top > -1 * inc){
                  inc = 0
                  break
              } else {
                  stack.pop()
                  if(stack.length > 0){
                      top = stack.at(-1)
                      topDir = top > 0
                  } else {
                      break
                  }
              }
          }
          if(inc != 0){
              stack.push(inc)
          }
      } else {
          stack.push(inc)
      }
    } 
    return stack
  };