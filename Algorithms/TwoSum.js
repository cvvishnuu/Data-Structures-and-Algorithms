const twoSum = (nums, target) => {
    let check = {}
    for(let i = 0; i < nums.length; i++) { 
        const diff = target - nums[i]
        console.log(diff)
        if(check[diff] !== undefined) {
            let array = []   
            array.push(check[diff], i )
            return array
        } else {
            check[nums[i]] = i;
        }
    }       
}

const array = [2,7,11,15]
const target = 13
console.log(twoSum(array, target))