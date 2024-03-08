let res;

function getFullName(firstName, lastName) {
  return function() {
    return `Hello ${firstName} ${lastName}`;
  };
}

const getName = getFullName('Name', 'Lastname');
console.log(getName());

function updateValue(value) {
  let x = value;
  return function(num) {
    return x += num;
  };
}

let updVal = updateValue(2);
let updVal2 = updateValue(5);   // Для каждого вызова функции создается свое лексическое окружение/контекст
console.log(updVal(3));
console.log(updVal(0));
console.log(updVal2(5));
console.log(updVal2(0));

function checkCred() {
  const login = 'admin';
  const password = 'somePass';

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPass(value) {
      return password === value;
    },
  };
}

const check = checkCred();
console.log(check.checkLogin('admin'));
console.log(check.checkPass('somePass'));

function closureExample() {
  const arrOfFunc = [];
  let value = '';

  for (let i = 0; i < 10; i++) {
    value += i + ' ';
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

res = closureExample();
res[0]();
res[1]();
res[2]();
res[7]();
