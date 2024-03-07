/*
1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.
2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
6. Дан объект:
let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
* */

let string = "i am in the easycode";
let newString = "";

for (let i = 0; i < string.length; i++) {
    if (i === 0) {
        newString += string[i].toUpperCase();
    } else if (string[i - 1] === " ") {
        newString += string[i].toUpperCase();
    } else {
        newString += string[i];
    }
}

console.log(newString);

let invertedString = "tseb eht ma i";
let resultString = "";

for (let i = invertedString.length - 1; i >= 0; i--) {
    resultString += invertedString[i];
}

console.log(resultString);

let factorial = 10;
let factorialResult = 1;
for (let i = 1; i <= factorial; i++) {
    factorialResult *= i;
}

console.log(factorialResult);

let stringJS = "JavaScript is a pretty good language";
let stringJSRes = "";
for (let i = 0; i < stringJS.length; i++) {
    if (stringJS[i - 1] === " ") {
        stringJSRes += stringJS[i].toUpperCase();
    } else if (stringJS[i] === " ") {
        continue;
    } else {
        stringJSRes += stringJS[i];
    }
}

console.log(stringJSRes);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        console.log(numArr[i]);
    }
}

let list = {
    name: "denis",
    work: "easycode",
    age: 29
};


for (const listKey in list) {
    if (typeof list[listKey] === "string") {
        list[listKey] = list[listKey].toUpperCase();
    }
}

console.log(list);