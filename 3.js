/**
 * reverse string
 * @param {string} str 
 * @returns {string}
 */
const reverseStr = str => {
    if (typeof str !== 'string') return `error value ${str}`;

    let reverseString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverseStr('develop')); // poleved
console.log(reverseStr(4)); // error value 4
console.log(reverseStr(null)); // error value null
console.log(reverseStr(undefined)); // error value undefined