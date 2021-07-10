const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 } ]


/**
 * remove dublicate object in arr
 * @param {Array<Object>} array 
 * @returns {Array<Object>|null}
 */
const removeDublicate = (array) => {
    if (!(arr instanceof Array)) {
        console.error('it is not array');
        return null;
    }

    const arrWithIndex = array.map(x => [x.id, x])
    
    return [...new Map(arrWithIndex).values()]
}
console.log(removeDublicate(arr));