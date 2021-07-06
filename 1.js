/**
 * get factorial number
 * @param {number} val 
 * @returns {number|string}
 */
const factorial = val => {

    if (typeof val !== 'number' || !!(val % 1) || val < 0) return `error value ${val}`;

    if (val === 0) return 1;

    return (val * factorial(val - 1));
}

console.log(factorial(5)); // 120
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800
console.log(factorial(15)); // 1307674368000
console.log(factorial(-1)); // error value -1
console.log(factorial(0)); // 1
console.log(factorial(5.6)); // error value 5.6
console.log(factorial('ggg')); // error value ggg
console.log(factorial(undefined)); // error value undefined
console.log(factorial(null)); // value null