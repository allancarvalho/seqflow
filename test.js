const flow = require('./flow');

const fn1 = (data, next) => {
    console.log('fn1')
    data++
    next(null, data)
}

const fn2 = (data, next) => {
    console.log('fn2')
    data++;
    next(null, data);
}
const fn3 = (data, next) => {
    console.log('fn3')
    data++;
    next(null, data);
}
flow([fn1, fn2, fn3], 0, (err, data) => {
    if(err) {
        console.error('error');
    }
    console.log('end without error', data);
});
