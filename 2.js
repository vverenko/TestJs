/**
 * adding all occurrences in the sequence
 * @param {number} val 
 * @returns {number|string}
 */
const sumNumber = val => {

    if (typeof val !== 'number' || !!(val % 1) || val < 0) return `error value ${val}`;

    if (val === 0) return 0;

    return val + sumNumber(val - 1);
}


console.log(sumNumber(1)); // 1
console.log(sumNumber(5)); // 15
console.log(sumNumber(10)); // 55
console.log(sumNumber(100)); // 5050
console.log(sumNumber('rgdfg')); // error value rgdfg
console.log(sumNumber(null)); // error value null
console.log(sumNumber(undefined)); // error value undefined