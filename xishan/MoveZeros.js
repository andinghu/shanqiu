/**
minimize writing
*/

const moveZeroes = (nums) => {
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            if (nums[j] === 0) {
              nums[j] = nums[i];
              nums[i] = 0;
            }
            j++;
        }
    }
}
