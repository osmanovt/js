const user = {
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
  info: {
    job: 'Google',
    skills: ['JS', 'CSS', 'React'],
  },
};

const {firstName: name, lastName, age: years = 20} = user;
console.log(name, lastName);

// const {
//         info: {job},
//       } = user;
// console.log(job);

const colors = ['yellow', 'green', 'red', '#000000'];
const [y, g, red, black = 'black'] = colors;
console.log(y, g, red, black);

const names = ['Ronaldo', 'Messi', 'Bale'];
const [name1, , name3] = names;
console.log(name1, name3);

const nestedArr = ['hello', ['key', 'value']];
const [, [key, value]] = nestedArr;
console.log(key, value);

// rest
const [nameR, ...otherNames] = names;
console.log(name, otherNames);                           // Cristiano ['Messi', 'Bale']
const [...newNames] = names;                    // Копирует массив/не глубокое копирование
console.log(newNames);                                  // ['Ronaldo', 'Messi', 'Bale']
const newNames2 = [...names];
console.log(...newNames2);

const colorNames = ['some value', ...colors, ...names];
console.log(colorNames);

const newUser = {...user, age: 30};                 // Не глубокое копирование/age перезапишет значение
console.log(newUser);

const {
        info: {
          skills: [js, css],
        },
      } = user;
console.log(js, css);

function myPerson({
                    lastName = 'def',
                    firstName = 'def',
                    info: {skills = []} = {},
                  } = {}) {
  console.log(lastName, firstName, skills);
}

myPerson(user);

function foo(x, y, ...other) {
  console.log(arguments);
  console.log([].slice.call(arguments));
  console.log(Array.prototype.slice.call(arguments));
  const [...args] = arguments;
  console.log(args);
  console.log(x, y, other);
}

foo(2, 4, 6, 8);

const numbers = [1, 2, 3, 4, 5, 6];

function foo2(x, y, ...other) {
  console.log(x, y, other);
}

foo2(...numbers);