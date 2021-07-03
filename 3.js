const array1 = [2, 3, 5, 9, 1, 0];
const array2 = [1, 2, 3, 4, 5, 6, 7];
const array3 = [2];
const array4 = [5, 8, -11, 7, -9];
const array5 = [];
const array6 = 'test';
const array7 = '';

/**
 * 
 * @param {numer[]} arr 
 * @returns {null|boolean}
 */
const checkSort = arr => {
    if (!(arr instanceof Array)) {
        console.error('it is not array');
        return null;
    }
    if (!arr.length) {
        console.error('array is empty');
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i + 1]) break;
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

console.log(checkSort(array1)); // false
console.log(checkSort(array2)); // true
console.log(checkSort(array3)); // true
console.log(checkSort(array4)); // false
console.log(checkSort(array5)); // array is empty \n null
console.log(checkSort(array6)); // it is not array \n null
console.log(checkSort(array7)); // it is not array \n null