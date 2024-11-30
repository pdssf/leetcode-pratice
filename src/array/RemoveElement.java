
class RemoveElement {
        public int removeElement(int[] nums, int val) {
            int p1 = 0;
            int p2 = nums.length - 1;
            int temp = 0;
            while(p1 < p2){
                if(nums[p1] != val){
                    p1++;
                } else if(nums[p2] != val){
                        nums[p1] = nums[p2];
                        p2--;
                        p1++;
                } else{
                    p2--;
                }
            }
            return p1;
        }
    }
