let obj1 = {
  name: 'Steve',
  info: {
    skills: ['JS', 'CSS', 'CSS'],
  },
};

let obj2 = {
  name: 'Bill',
  age: 24,
};

let newObj = obj1;
console.log(newObj === obj1);

newObj = Object.assign({}, obj1, obj2);

console.log(newObj);
console.log(newObj === obj1);

newObj = Object.assign(obj1, obj2); // последний объект перезапишет значения полей с одинаковыми ключами
console.log(newObj === obj1);       // true так как исходный объкт obj1
console.log(obj1);                  // {name: 'Bill', age: 24}

// newObj = JSON.stringify(obj1);
// newObj = JSON.parse(newObj);
newObj = JSON.parse(JSON.stringify(obj1));
console.log(newObj);
console.log(newObj.info.skills === obj1.info.skills);

newObj = structuredClone(obj1);     // новая функция для глубокого копирования объектов
console.log(newObj.info === obj1.info);

let keys = Object.keys(obj2);
console.log(keys);

let values = Object.values(obj2);
console.log(values);

// получает массив массивов из ключа и значения
let entries = Object.entries(obj1);
console.log(entries);

let fromEntries = Object.fromEntries([['a', 'entries'], ['b', 'b_value']]);
console.log(fromEntries);