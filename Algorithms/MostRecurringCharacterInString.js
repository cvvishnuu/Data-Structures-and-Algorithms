
// If two character reoccurs for the same amount of time u need another array to print them.

const maximumRecurringCharacter = (str) => {
    if(!str.length) {
        return "empty string"
    }
    if(str.length === 1) {
        return str
    }
    let hashtable = {};
    let max = 0;
    for(let i = 0; i < str.length; i++) {
        if(!hashtable[str[i]]) {
            hashtable[str[i]] = 1;
        } else {
            hashtable[str[i]] = hashtable[str[i]] + 1;
        }
    }
    
    let character = []
    for(const key in hashtable) {    
        if(max < hashtable[key]) {
            max = hashtable[key];
            character.push(key);
        }
    }  
    console.log(character)
    return `${character[character.length-1]} occurs ${max} times.`;  
}


const string = "deepthi caroline";
console.log(maximumRecurringCharacter(string));


