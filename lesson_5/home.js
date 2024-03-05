/*
1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
2. Используя if, записать условие:
 если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
5. Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */

let view = "hidden";

if (view === "hidden") {
    view = "visible";
} else {
    view = "hidden";
}
console.log(view);

let valueH = -2;

if (valueH === 0) {
    valueH = 1;
} else if (valueH < 0) {
    valueH = "less than zero";
} else if (valueH > 0) {
    valueH *= 10;
}

console.log(valueH);

let car = {
    name: "Lexus",
    age: 10,
    create: 2013,
    needRepair: false
};

if (car.age > 5) {
    console.log("Need repair");
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(car);

let item = {name: "Intel core i7", price: "100$", discount: "15%"};
let price = parseInt(item.price);
let discount = parseInt(item.discount);
if (!isNaN(price) && !isNaN(discount)) {
    item.priceWithDiscount = price - (price / 100 * discount);
} else if (!item.discount) {
    console.log(item.price);
}

console.log(item);

let product = {
    name: "Яблоко",
    price: "10$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

productPrice = parseInt(product.price);

if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
} else {
    console.log("Product not found");
}