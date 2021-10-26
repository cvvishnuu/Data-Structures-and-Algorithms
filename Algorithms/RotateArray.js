const reverse = (nums, start, end) => {
    let temp;
    
    while(start < end) {
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
    
}

const rotateRight = (nums, k) => {
    
    if(k > nums.length) {
        k = k % nums.length
    }
    
    let mid = (nums.length-k)-1
    reverse(nums, 0, mid);
    reverse(nums, mid+1, nums.length-1)
    reverse(nums, 0, nums.length-1)
    
    return nums
    
};

const rotateLeftt = (nums, k) => {
    
    if(k > nums.length) {
        k = k % nums.length
    }
    
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1)
    reverse(nums, 0, nums.length-1)
    
    return nums
    
};

const array = [1,2,3,4,5]
const shift = 3


console.log(rotateLeftt(array, shift));