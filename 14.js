const {
    performance
} = require('perf_hooks');


/**
 * 
 * @param {function} somefunc 
 * @returns 
 */
const wrapperFunction = async somefunc => {
    const timeStart = performance.now();
    await somefunc();
    const timeStop = performance.now();
    console.log(timeStop - timeStart);
}

const operation = () => {
    for (let i = 0; i < 10000; i++) console.log(i);
};

wrapperFunction(operation);