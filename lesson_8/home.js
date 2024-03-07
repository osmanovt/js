/*
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

Если нет ни одного аргумента, вернуть ноль: multiply() // 0

Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

getCodeStringFromText(‘hello’) // “104 101 108 108 111”

подсказка: для получения кода используйте специальный метод

Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
 */

const multiply = (...arg) => {
    if (!arg.length) return 0;
    let res = 1;
    for (let i = 0; i < arg.length; i++) {
        res *= arg[i];
    }
    return res;
};

console.log(multiply(2, 3, 4));

const reverseString = (text) => {
    let res = "";
    for (let i = text.length - 1; i >= 0; i--) {
        res += text[i];
    }

    return res;
};

console.log(reverseString("message"));

const getCodeStringFromText = (string) => {
    let res = "";
    for (let i = 0; i < string.length; i++) {
        res += string[i].charCodeAt() + " ";
    }

    return res;
};

console.log(getCodeStringFromText("hello"));

const randomNumber = (x) => {
    if (x < 0 || x > 10) return "Числа только от 1 до 10!";
    let rand = Math.floor(Math.random() * 10 + 1);
    if (x === rand) {
        return "Вы выиграли!";
    } else {
        return `Вы не угадали ваше число ${x}, а выпало число ${rand}`;
    }
};

console.log(randomNumber(2));