const array1 = [2, 3, 5, 9, 1, 0];
const array2 = [66, 54, 45, 89, 32, 76, 11];
const array3 = [2];
const array4 = [5, 8, -11, 7, -9];
const array5 = [];
const array6 = 'test';
const array7 = '';

/**
 * 
 * @param {numer[]} arr 
 * @returns {null|number}
 */
const getAverage = arr => {
    if (!(arr instanceof Array)) {
        console.error('it is not array');
        return null;
    }
    if (!arr.length) {
        console.error('array is empty');
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(getAverage(array1)); // 3.3333333333333335
console.log(getAverage(array2)); // 53.285714285714285
console.log(getAverage(array3)); // 2
console.log(getAverage(array4)); // 0
console.log(getAverage(array5)); // array is empty \n null
console.log(getAverage(array6)); // it is not array \n null
console.log(getAverage(array7)); // it is not array \n null