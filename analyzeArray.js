function analyzeArray(arr) {
    const length = arr.length;
    const average = arr.reduce((acc, el) => acc + el, 0) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { average, min, max, length };
}

module.exports = analyzeArray;