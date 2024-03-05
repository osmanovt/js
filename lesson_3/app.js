const firstName = "Tural";
const lastName = "Osmanov";
const age = 20;
const str = "Hello my name is Tural";

let value;

value = firstName + " " + lastName;
value += " I am " + age;

value = str + " " + lastName;

value = firstName.length;
value = firstName[2];
value = lastName[lastName.length - 1];

value = firstName.toUpperCase();    // Не изменяет исходное значение переменной
value = firstName.concat(" ", lastName, " ", age);

value = firstName.indexOf("ra");     // Возвращает индекс первого найденого вхождения (-1 если не найдено)
value = str.indexOf("l", 11);        // Вторым параметром с какого индекса искать
value = str.lastIndexOf("o");        // Ищет с конца строки
value = str.includes("my");           // true/false ищет подстроку, чувствителен к регистру

value = str.slice(0, 5);              // Hello
value = str.slice(5);                 // С 5го индекса, до конца строки
value = str.slice(0, -3);             // Вернет строку без последниз 3х символов

value = str.replace('Tural', 'Elvin')

console.log(value);