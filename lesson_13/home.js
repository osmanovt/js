const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result;
result = numbers.map(el => {
  return {
    digit: el,
    odd: !Number(el % 2),
  };
});

console.log(result);

const numbers2 = [12, 4, 50, 1, 0, 18, 40];
result = numbers2.some(el => el === 0);
console.log(result);

const strings = ['yes', 'hello', 'no', 'easycode', 'what'];
result = strings.every(el => el.length > 3);
console.log(result);

const confusingString = [
  {char: 'a', index: 12},
  {char: 'w', index: 8},
  {char: 'Y', index: 10},
  {char: 'p', index: 3},
  {char: 'p', index: 2},
  {char: 'N', index: 6},
  {char: ' ', index: 5},
  {char: 'y', index: 4},
  {char: 'r', index: 13},
  {char: 'H', index: 0},
  {char: 'e', index: 11},
  {char: 'a', index: 1},
  {char: ' ', index: 9},
  {char: '!', index: 14},
  {char: 'e', index: 7}]
;
// confusingString.sort((a, b) => a.index - b.index);
// result = confusingString.reduce((acc, el) => acc += el.char, '');
// console.log(result);

const sortArr = (arr) => {
  arr.sort((a, b) => a.index - b.index);
  return arr.reduce((acc, el) => acc += el.char, '');
};

console.log(sortArr(confusingString));

let arr = [[14, 45], [1], ['a', 'c', 'd']];
result = arr.sort((prev, next) => prev.length - next.length);
console.log(result);

arr = [
  {cpu: 'intel', info: {cores: 2, сache: 3}},
  {cpu: 'intel', info: {cores: 4, сache: 4}},
  {cpu: 'amd', info: {cores: 1, сache: 1}},
  {cpu: 'intel', info: {cores: 3, сache: 2}},
  {cpu: 'amd', info: {cores: 4, сache: 2}},
];
result = arr.sort((prev, next) => prev.info.cores - next.info.cores);

console.log(result);

let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63},
];

const filterCollection = (arr, min, max) => {
  let result = arr.filter(el => el.price >= min && el.price <= max);
  return result.sort((a, b) => a.price - b.price);
};

console.log(filterCollection(products, 15, 30));