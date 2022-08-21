function capitalize(str){
    const capStr = str.replace(/^[a-z]/, (c) => c.toUpperCase());
    return capStr;
}

module.exports = capitalize