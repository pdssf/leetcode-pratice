// s1 = "aa bcc" 
// s2 = "dbbca"
//  s3 = "aa dbb b accc"


function isInterleave (s1, s2, s3){
    let l1 = s1.length
    let l2 = s2.length
    let l3 = s3.length

    if(l1+l2 != l3) {
        return false
    }
    let memo = new Set()

    function helper (i, j, k){
        if(k == l3){
            return true
        }

        if(memo.has(`${i},${j}`)){
            return false
        }

        if(i<l1 && s3[k] == s1[i]){
            if(helper(i+1, j, k+1)){
                return true
            }
            memo.add(`${i+1},${j}`)
        }

        if(j<l2 && s3[k] == s2[j]){
            if(helper(i, j+1, k+1)){
                return true
            }
            memo.add(`${i},${j+1}`)
        }

        return false
    }
    return helper(0, 0, 0)
}