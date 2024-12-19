
function canVisitAllRooms (rooms = [[]]){
    let nRooms = rooms.length
    let visited = new Array(nRooms).fill(false)
    let queue = [0] //Always start with room zero
    let currentRoom = null

    while(queue.length > 0){
        currentRoom = queue.shift()
        visited[currentRoom] = true
        for(let r of rooms[currentRoom]){
            if(!visited[r]){
                queue.push(r)
            }
        }
    }
    return visited.every(e => e == true)
}

// [[1,3],[3,0,1],[2],[0]]

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms.
//  However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks,
//  and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit 
// all the rooms, or false otherwise.

