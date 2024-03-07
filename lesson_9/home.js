/*
5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
doubleArray([1,2,3]) // [1,2,3,1,2,3]

7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
 */

const getArray = (n) => {
    if (typeof n !== "number" && n < 0) return;
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    return res;
};

console.log(getArray(5));

let array = [1, 2, 3];
const doubleArray = (arr) => {
    return arr.concat(arr);
};

console.log(doubleArray(array));

const changeCollection = (...arg) => {
    if (arg.length <= 0) return;
    let res = [];
    for (let i = 0; i < arg.length; i++) {
        if (Array.isArray(arg[i])) {
            const el = arg[i].slice();
            el.shift();
            res.push(el);
        }
    }

    return res;
};

console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

const users = [
    {
        name: "Tural",
        age: 24,
        gender: "male"
    },
    {
        name: "Samir",
        age: 34,
        gender: "male"
    },
    {
        name: "Diana",
        age: 22,
        gender: "female"
    },
    {
        name: "Emil",
        age: 21,
        gender: "male"
    },
];

const funcGetUsers = (arr, key, value) => {
    if (!Array.isArray(arr)) return new Error("The first argument should be an array");
    if (typeof key !== "string" || key === "") return new Error("The key should be a valid string");
    if (value === undefined || value === null) return new Error("The value should be a valid value.");

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            res.push(arr[i]);
        }
    }

    return res;
};

console.log(funcGetUsers(users, "gender", "male"));