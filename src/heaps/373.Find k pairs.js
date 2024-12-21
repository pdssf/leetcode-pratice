



function kSmallestPairs (nums1, nums2, k) {
    let kpairs = []
    let p1 = 0
    let p2 = 0
    let memo = 0
    do{
        kpairs.push([nums1[p1], nums2[p2]])
        if((nums1[p1+1] > nums2[p2+1] || nums1[p1] ) && p2<nums2.length){
            p2++
            if(memo == 1){
                p1 = 0
            }
            memo = 2
        } else {
            p1++
            if(memo == 2){
                p2 = 0
            }
            memo = 1
        }
    }while(kpairs.length < k) 
    
    return kpairs
};

let heap = new MinHeap()
// [1,2,4,5,6]
//    ˆ 
// [3,5,7,9]
//  ˆ
// [1,3], [2,3], [1,6], [7, 2], 
// memo = 1

// [1, 1, 2]
//     ˆ
// [1, 2, 3]
//     ˆ

// [1,1] [1,1] [1,2]

// generate pairs with current index
// do: evaluate wich list has the next smallest
// if it resets the last choice, reset the pointer of the other list
// move foward and generate a new pair
// return to 2 until we reach k elements