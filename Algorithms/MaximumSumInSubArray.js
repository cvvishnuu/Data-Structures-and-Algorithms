
// Kandaene's Algorithm

const maximumSum = (arr, size) => {
    
    let max_so_far = 0, max_ending_here = 0, start = 0, end = 0, s = 0;

    for(let i = 0; i < size; i++) {
        max_ending_here = max_ending_here + arr[i];        
        if(max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }
        if(max_ending_here <= 0) {
            max_ending_here = 0
            s = i+1
        }
    }

    console.log(`The maximum contigous sum is : ${max_so_far} and the start and end idices are ${start} and ${end}`);

}

const array = [1,2,3,4,-10,8,8, -200, 1000];

maximumSum(array, array.length);