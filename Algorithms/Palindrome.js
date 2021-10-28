const checkPalindrome = (string) => {
    let stringArray = string.split("");
    let checkArray = stringArray.reverse()
    let checkString = checkArray.join('')
    if(checkString == string) return true
    return false
}

const diffMethod = (string) => {
    const len = string.length;
    for(let i = 0; i < len/2; i++){
        if(string[i] !== string[len-1-i]) return false
    }
    return true
}

console.log(diffMethod("SOS"))