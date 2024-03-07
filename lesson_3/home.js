/*
1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”
*/

let string = "some test string";
let valueH;

valueH = string[0];
valueH = string[string.length - 1];
console.log(valueH);

valueH = string[0].toUpperCase();
valueH = string[string.length - 1].toUpperCase();
valueH = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`;
console.log(valueH);

valueH = string.search("string");
console.log(valueH);

valueH = string.indexOf(" ", string.indexOf(" ") + 1);
console.log(valueH);

valueH = string.substr(5, 4);
console.log(valueH);

valueH = string.substring(5, 9);
console.log(valueH);

valueH = string.slice(0, -6);
console.log(valueH);

let a = 20;
let b = 22;
valueH = a.toString() + b.toString();


console.log(valueH);