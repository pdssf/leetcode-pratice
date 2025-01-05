// Model as graph
// 1 - build adjacency list with emails, each email is a node
// 2 - do BFS with all emails. 
// 3 - sort emails? 

// if graph already has an email, we need to push the email in every other element. 




function accountsMerge (accounts) {
    let graph = new Map()
    let mail2name = new Map()

    // step 1: build the graph

    for(let acc of accounts){
        let name = acc[0]
        let first = acc[1]
        for(let i=1; i< acc.length; i++){
            let email = acc[i]
            if(!graph.has(email)){
                graph.set(email, [])
            }
            graph.get(first).push(email)
            graph.get(email).push(first)
            mail2name.set(email, name)
        }
    }

    let visited = new Set()

    function dfs (mainAcc, emails){
        visited.add(mainAcc)
        for(let neighbor of graph.get(mainAcc)){
            if(!visited.has(neighbor)){
                emails.push(neighbor)
                dfs(neighbor, emails)
            }
        }
    }
    let response = []

    for(let account of graph.keys()){
        if(!visited.has(account)){
            let allEmails = new Array(1)
            allEmails[0] = account
            dfs(account, allEmails)
            allEmails.sort()
            response.push([mail2name.get(account), ...allEmails])
        }
    }
    return response
}