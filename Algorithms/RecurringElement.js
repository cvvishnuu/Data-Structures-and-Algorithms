const recurringElement = (array) => {

    if(!array.length) return "Empty array"

    let check = {}
    for(let i = 0; i < array.length; i++) {        
        if(check[array[i]] !== undefined) {
            return array[i]
        } else {
            check[array[i]] = i;
        }
        console.log(check)
    }

    return "No recurring character"

    
}


const array = [5,10,2,5,6,7,8,6];

console.log(recurringElement(array))
