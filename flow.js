'use strict';

const seqFlow = (arr = [], data = '', cb = () => {}) => {
  let seq = arr.shift();
  const next = (err, data) => {
    if (err) {
      return cb(err, data)
    }
    seqFlow(arr, data, cb);
  }
  if (seq) {
    if (seq instanceof Function) {
      return seq(data, next);
    }
    throw new Error(`${seq} needs to be a function`);

  } else {
    cb(false, data);
  }
}

module.exports = seqFlow;
