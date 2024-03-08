const minus = (value = 0) => {
  let a = value;
  return function(b = 0) {
    return a - b;
  };
};
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

function multiplyMaker(value = 1) {
  let a = value;
  return function(b) {
    return a *= b;
  };
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

const configStr = (() => {
  let str = '';
  return {
    setStr(value = '') {
      str = String(value);
      return str;
    },
    getStr() {
      return str;
    },
    getStrLength() {
      return str.length;
    },
    getReverseStr() {
      return str.split('').reverse().join('');
    },
  };
})();

console.log(configStr.setStr('abcde'));
console.log(configStr.getStr());
console.log(configStr.getStrLength());
console.log(configStr.getReverseStr());

const calc = (() => {
  let value = null;
  return {
    setVal(a) {
      value = a;
      return this;
    },
    exponentiation() {
      value *= value;
      return this;
    },
    plus(a) {
      value += a;
      return this;
    },
    multiply(a) {
      value *= a;
      return this;
    },
    getVal() {
      return value;
    },
  };
})();

console.log(calc.setVal(2).plus(4).exponentiation().multiply(2).getVal());
