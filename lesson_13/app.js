const users = [
  {
    _id: '5eqwertyuiop2341234567890',
    index: 0,
    isActive: true,
    balance: 878.77,
    name: 'John',
    age: 30,
    city: 'New York',
    skills: ['JavaScript', 'HTML', 'CSS'],
    email: 'Qb7sH@example.com',
    phone: '543-456-7890',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    _id: 'rdsaf543rtyuiop2341234567890',
    index: 1,
    isActive: true,
    balance: 5445.76,
    name: 'Jane',
    age: 25,
    city: 'Los Angeles',
    skills: ['JavaScript', 'HTML', 'CSS'],
    email: 'h9YrZ@example.com',
    phone: '234-456-7890',
    address: {
      street: '123 Main Street',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
    },
  },
  {
    _id: 'sda123wertyuiop2341234567890',
    index: 2,
    isActive: false,
    balance: 2608.45,
    name: 'Bob',
    age: 35,
    city: 'Chicago',
    skills: ['JavaScript', 'HTML', 'CSS'],
    email: 'pCnFt@example.com',
    phone: '376-456-7890',
    address: {
      street: '123 Main Street',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
    },
  },
  {
    _id: '3eaw21ertyuiop2341234567890',
    index: 3,
    isActive: true,
    balance: 213.23,
    name: 'Alice',
    age: 28,
    city: 'Houston',
    skills: ['JavaScript', 'HTML', 'CSS'],
    email: '3l1gR@example.com',
    phone: '987-456-7890',
    address: {
      street: '123 Main Street',
      city: 'Houston',
      state: 'TX',
      zip: '77001',
    },
  },
];

// forEach - перебор элементов массива по индексу
// filter - фильтрация элементов
// map - преобразование элементов, возвращает массив из результатов
// reduce - суммирование элементов
// some - проверка наличия, хотябы одного
// every - проверка наличия, всех

// foreach
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// filter
const userLess30 = users.filter(user => user.age >= 30);
console.log(userLess30);

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// map
const usersName = users.map(user => user.name);
const usersFields = users.map(user => ({
  name: user.name,
  age: user.age,
}));
console.log(usersName);
console.log(usersFields);

// reduce
const totalBalance = users.reduce((acc, current) => acc += current.balance, 0);
const usersObj = users.reduce((acc, current) => {
  acc[current._id] = current;
  return acc;
}, {});
console.log(totalBalance);
console.log(usersObj);

// some/every
const isHouston = users.some(user => user.city === 'Houston');
console.log(isHouston);
const isAllFromHouston = users.every(user => user.city === 'Houston');
const isAll18 = users.every(user => user.age >= 18);
console.log(isAllFromHouston);
console.log(isAll18);

// find
const user = users.find(user => user.name === 'Alice');
console.log(user);

// sort
const strArr = ['Tom', 'Jhon', 'Ronaldo', 'Anna', 'Bill'];
strArr.sort();
console.log(strArr);
const numArr = [10, 8, 3, 23, 4, 93];
numArr.sort((prev, next) => prev - next);
console.log(numArr);
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);