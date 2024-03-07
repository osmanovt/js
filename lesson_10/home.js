/*
1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
 */

const processArrayWithCallback = (arr, handler) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(handler(arr[i]));
    }

    return "New value: " + res.join("");
};

const handler = (el) => {
    return `${el[0].toUpperCase()}${el.slice(1)}`;

};

const handler2 = (el) => {
    return el * 10 + ", ";

};

const handler3 = (el) => {
    return `${el.name} is ${el.age}, `;

};

const handler4 = (el) => {
    return el.split("").reverse().join("") + ", ";

};

console.log(processArrayWithCallback(["my", "name", "is", "Trinity"], handler));
console.log(processArrayWithCallback([10, 20, 30], handler2));
console.log(processArrayWithCallback([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}], handler3));
console.log(processArrayWithCallback(["abc", "123"], handler4));

const everyCustom = (arr, cb) => {
    if (!Array.isArray(arr)) return new Error("Не массив");
    if (typeof cb !== "function") return new Error("Не функция");
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], arr.indexOf(arr[i]), arr)) return false;
    }
    return true;
};

const numCheck = (el, index, arr) => {
    return el > 5;
};

console.log(everyCustom([6, 2, 7], numCheck));