function sayHello(firstName = "Default", lastName = "Default") {
    // if (!firstName) return console.error("Error");
    console.log(firstName, lastName);
    return `Hello ${firstName} ${lastName}`;
}

let res = sayHello("Tural", "Osmanov");
let res2 = sayHello("Elvin", "Osmanov") + "!";
let res3 = sayHello();
let res4 = sayHello(null);

console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);

let x = 10;

function foo() {
    let x = 20;
    console.log(x);
    return x;
}

foo();

console.log(x);

const user = {
    name: "Tural",
    age: 26
};

function getObj(obj) {
    obj.name = "Atash";         // Изменяет исходный объект
}

getObj(user);
console.log(user);

const square = function (x) {
    return x * x;
};

let resSquare = square(5);
console.log(resSquare);

// Ананонимная самовызывающаяся функция
(function (msg) {
    console.log(msg);
}("Hello world"));

function foo2(arr, ...arg) {
    console.log(arg);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

foo2([1, 2, 3], "message", 11);