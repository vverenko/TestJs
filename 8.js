
const objectForCalc = {
    a: 1,
    b: 2
}

const objectForCalc2 = {
    a: 40,
    b: 50
}

/**
 * 
 * @returns {number}
 */
function calc() {
    return this.a + this.b;
}

console.log(calc.call(objectForCalc)); // 3
console.log(calc.call(objectForCalc2)); // 90
