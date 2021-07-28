const {
    performance
} = require('perf_hooks');


/**
 * 
 * @param {function} somefunc 
 * @returns 
 */
const wrapperFunction = somefunc => {
    const timeStart = performance.now();
    somefunc();
    const timeStop = performance.now();
    console.log(timeStop - timeStart);
}

const operation = () => {
    for (let i = 0; i < 10000; i++) console.log(i);
};

wrapperFunction(operation);