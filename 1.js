const array1 = [2, 3, 5, 9, 1, 0];                         
const array2 = [66, 54, 45, 89, 32, 76, 11];                         
const array3 = [2];                         
const array4 = [5, 8, -11, 7, -9];                         
const array5 = [];                         
const array6 = 'test';                         
const array7 = '';                         

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]|null}
 */
const getMinMaxValue = arr => {
    if (!(arr instanceof Array)) {
        console.error('it is not array');
        return [null, null];
    }
    if (!arr.length) {
        console.error('array is empty');
        return [null, null];
    }
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return [min, max];
}

console.log(getMinMaxValue(array1)); // [ 0, 9 ]
console.log(getMinMaxValue(array2)); // [ 11, 89 ]
console.log(getMinMaxValue(array3)); // [ 2, 2 ]
console.log(getMinMaxValue(array4)); // [ -11, 8 ]
console.log(getMinMaxValue(array5)); // array is empty \n [ null, null ]
console.log(getMinMaxValue(array6)); // it is not array \n [ null, null ]
console.log(getMinMaxValue(array7)); // it is not array \n [ null, null ]