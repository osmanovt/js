//Number
const num1 = 10;
const num2 = 20;
let value;

// + * / -
value = num1 + num2;    // 30
value = value + 100;    // 130
value += 100;           // 230
value = 4;
value = 4 % 2;          // 0
value = 5 % 2;          // 1

value = 10;
value++;                // 11   На следующей строке
value--;                // 10
++value;                // 11   На этой же строке
--value;                // 10

value = 0.6 + 0.7;      // 1.2999999999999998
// value = value.toFixed(0.6 + 0.7);    // 1.3  String
// value = +value.toFixed(0.6 + 0.7);   // 1.3  Number
value = parseFloat(value.toFixed(0.6 + 0.7));   // 1.3  Number
value = (0.6 * 10 + 0.7 * 10) / 10;     // 1.3 Number

// Math
value = Math.PI;
value = Math.random();          // от 0 до 1
value = Math.round(2.4);     // 2 округление числа
value = Math.round(2.5);     // 3 округление числа
value = Math.ceil(2.1);      // 3 всегда в большую
value = Math.floor(2.9);      // 2 всегда в меньшую
value = Math.min(12, 4, 23, 54, 43);  // 4 минимальное число
value = Math.max(12, 4, 23, 54, 43);  // 54 максимальное число

value = Math.floor(Math.random() * 100 + 1);

const arr = ["black", "pink", "red", "green", "yellow", "white", "orange"];
value = Math.floor(Math.random() * arr.length);

console.log(value);
console.log(arr[value]);

