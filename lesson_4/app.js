const user = {
    firsName: "Tural",
    lastName: "Osmanov",
    age: 26,
    isAdmin: true,
    email: "test@test.ru",
    "user-address": {
        city: "Moscow",
    },
    skills: ["html", "css", "js", "php"]
};

let value;
let prop = "skills";

value = user.firsName;
value = user["isAdmin"];
value = user["user-address"].city;
value = user["user-address"]["city"];
value = user[prop][1];

user.firsName = "Tur";
value = user.firsName;

user.info = "Some info";

user["user-address"].city = "Tambov";

user["user-address"].country = "Russia";


console.log(value);
console.log(user);