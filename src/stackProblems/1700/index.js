var countStudents = function(students, sandwiches) {
    const sandStack = sandwiches.reverse()
    let count = 0 //this variable tracks if line has looped
    let topSand = sandStack.pop()
    while(count <= students.length && students.length > 0){
        let firstInLine = students.shift()
        if(firstInLine == topSand){
            count = 0
            topSand = sandStack.pop()
        } else {
            count++
            students.push(firstInLine)
        }
    }
    return students.length
};