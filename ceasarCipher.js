const alphabet = "abcdefghijklmnopqrstuvwxyz"

function isLetter(char){
    const letterRegex = /[a-zA-Z]/
    return letterRegex.test(char);
}

function isUpperCase(char){
    return char === char.toUpperCase();
}

function isLowerCase(char) {
    return char === char.toLowerCase()
}

function upperCaseCipher(char) {
    const cipherStr = alphabet.toUpperCase();
    const index = cipherStr.indexOf(char);
    const newIndex = (index + 1) % cipherStr.length;
    return cipherStr[newIndex];
}

function lowerCaseCipher(char) {
    const cipherStr = alphabet;
    const index = cipherStr.indexOf(char);
    const newIndex = (index + 1) % cipherStr.length;
    return cipherStr[newIndex];
}

function ceasarCipher(str) {
    const cipherArr = [];
    for (let char of str) {
        if (isLetter(char)) {
            isUpperCase(char) ? cipherArr.push(upperCaseCipher(char)) : cipherArr.push(lowerCaseCipher(char));
        }
        else {
            cipherArr.push(char)
        }
    }
    return cipherArr.join("");
}

module.exports = ceasarCipher;