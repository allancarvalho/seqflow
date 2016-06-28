# seqflow 

## Doc
### seqflow(array, data, callback)
* `array` - Array of functions 
* `data` - data to send for the first item of array
* `callback` - recieves two parameters - err (null or error) and data (result of the last item of array);

## Your function
```javascript
foo(data, next);
```
* `data`
* `next` function must to be called to go to next function

## Usage 
```javascript
const seqflow = require('seqflow');

const fn1 = (data, next) => {
    console.log('fn1');
    data++
    next(null, data);
}

const fn2 = (data, next) => {
    console.log('fn2')
    data++;
    next(null, data);
}
const fn3 = (data, next) => {
    console.log('fn3');
    data++;
    next(null, data);
}

seqflow([fn1, fn2, fn3], 0, (err, data) => {
    if(err) {
        console.error('error');
    }
    console.log('end without error', data);
});

```

