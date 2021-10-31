
const removeDuplicates = (str) => { 
    const string = new Set();
    let newStr = str.split('');
    for(let i = 0; i < newStr.length; i++) {
        string.add(str[i])
    }
    return [...string].join('')
}

const string = "Deepthiiiiiddddjjjjhhh"
console.log(removeDuplicates(string))