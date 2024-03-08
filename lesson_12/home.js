function sum() {
  const params = Array.prototype.slice.call(arguments);
  if ( !params.length ) return 0;
  return params.reduce((a, b) => a + b);
}

const sum2 = (...params) => {
  if ( !params.length ) return 0;
  return params.reduce((a, b) => a + b);
};

console.log(sum(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));