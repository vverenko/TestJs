function wait() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
}

const f = async () => {
    try {
        const data = await wait();
        console.log(data);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('Promise complete');
    }
}

f();