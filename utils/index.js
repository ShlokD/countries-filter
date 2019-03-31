'use strict';

export default (fn, timeout) => {
  let currentTimeout;

  return function(...args) {
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => fn.apply(this, args), timeout)
  }
}