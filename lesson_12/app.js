const plus = (x = 0, y = 0) => x + y;
console.log(plus(3, 4));

const withoutArgs = () => console.log('Hello');
const singleArg = x => x * 2;
const singleArg2 = (x = 2) => x * 2;

const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

const returnObj = (str) => ({
  value: str,
  length: str.length,
});

console.log(returnObj('hello'));

function plusFoo(x, y) {
  console.log(arguments);       // В стрелочных функциях нет arguments и нет контекста this
  return x + y;
}

plusFoo(1, 2, 3, 'ste');

const obj = {
  name: 'Tural',
  age: 32,
  getName() {
    console.log(this.name);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this.age);
    setTimeout(() => console.log(this.age), 1000);
  },
};

obj.getName();
obj.getAge();
// obj.getAgeArrow();
