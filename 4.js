/**
 * makes a string from the words that send
 * @returns {string}
 */
const makeStr = () => {
    let fullStr = '';

    return (str) => {
        if (!str) return fullStr;
        return fullStr += str;
    };
}

let str1 = makeStr();
let str2 = makeStr();

str1('qwe')
str1('rty')
str1('uio')
str1('p[]')

str2('asd')
str2('fgh')
str2('jkl')
str2('l\'')


console.log(str1()); // qwertyuiop[]
console.log(str2()); // asdfghjkll'