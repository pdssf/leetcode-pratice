class RemoveDuplicates {
    public int removeDuplicates (int[] nums){
        int p2 = 0;
        for(int i=0; i<nums.length;i++){
            if(nums[i] != nums[p2]){
                p2++;
                nums[p2] = nums[i];
            }
        }
        return ++p2;
    }
}

// []
// [1]
// [1,2]
// [1,1]
// [0,0,0,0,0,0]
// [1,2,3,4,5,6]
// [0,1,2,3,4,2,2,3,3,4]
//          2
//                    i
