function reverseString(str){
    const strArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        strArr.push(str[i])
    }
    return strArr.join('');
}

module.exports = reverseString;