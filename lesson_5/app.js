let value;

value = [];

if (value.length) {
    console.log(value);
} else {
    console.log("array is empty");
}

if (Array.isArray(value)) {
    console.log("is array");
} else {
    console.log("is not array");
}

let user = {
    name: "Tural"
};

if (user.hasOwnProperty("name")) {      // Проверяет ключ, но не значение
    console.log(user.name);
} else {
    console.log("else");
}

value = 2 || 1 || 0;         // 2 Присвоит первый true
value = 0 || null;           // Возвращает последний false

let age = 20;

if (age < 16 || age > 56) {
    console.log("some action");
} else {
    console.log("else");
}

let serverNickname = "";
let nickname = serverNickname || "default nickname";        // default nickname
console.log(nickname);

value = 1 && 2 && 3;        // 3 если нет false, вернет последнмй true
value = 1 && 0 && 2;        // 0 вернет первый false
console.log(value);

let productPrice = 10;
if (productPrice >= 5 && productPrice <= 20) {
    console.log("true");
} else {
    console.log("false");
}


