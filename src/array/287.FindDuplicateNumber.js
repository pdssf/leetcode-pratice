

// function findDuplicate (nums) {


// }

// [5,3,1,3,4,2]
//    s   f     

// 1 - for each position, search the others elements if it is equal in a O(nˆ2) -> slow
// 2 - Sort the array in an O(nLog(n)) complexity and than search the i position wich is equals to i+1 in O(n) -> changes the array
// 3 - Uses a hashSet to check if the number is already saw in an O(1) way, do this for the N elements -> too much memo
// 4 - using turtle and rabbit algorithm, threating as an graph
// 

// [5,3,1,3,4,2]
//      L H 
function findDuplicate(nums) {
    let low = 1, high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2); // 3 -> 2
        let count = 0;

        // Count numbers <= mid
        for (let num of nums) {
            if (num <= mid) count++; // 4 -> 1
        }

        if (count > mid) {
            high = mid; // Duplicate is in the lower half
        } else {
            low = mid + 1; // Duplicate is in the upper half
        }
    }

    return low; // Duplicate number
}

console.log(findDuplicate([5,6,3,1,4,2,5]))


// We can use this insight to count how many numbers are <= x  for a given  x , and compare this count to  x . 
// If the count is higher than  x , it implies that the duplicate resides in the range  [1, x] ; otherwise, it must be in  [x+1, n] 


// if the array is 1 -> N, for the midle of the array it should have n/2 elements less than it.