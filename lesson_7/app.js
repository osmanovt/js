// while, do while, for, for of, for in

let i = 0;
while (i++ < 10) {
    console.log(i, "++");
}

while (i-- > 1) {
    console.log(i, "--");
}

do {
    console.log(i, "do");
} while (i++ < 10);

for (let j = 0; j <= 10; j++) {
    if (j === 5) continue;                      // break останавливает итерации
    console.log(j, "for j");
}

let str = "Hello";
let res = "";

for (let k = 0; k < str.length; k++) {
    res += str[k];
    console.log(res);
}

let colors = ["white", "black", "yellow", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
    console.log(colors[i]);
}

const users = [
    {
        name: "Tural",
        age: 32
    },
    {
        name: "Samir",
        age: 43
    },
    {
        name: "Atash",
        age: 46
    },
    {
        name: "Elvin",
        age: 37
    }
];

const usersObj = {};

for (let j = 0; j < users.length; j++) {
    usersObj[users[j].name] = users[j];
}

console.log(usersObj);

const user = {
    name: "Tural",
    age: 26,
    height: 182
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

for (let value of users) {
    console.log(value);
}