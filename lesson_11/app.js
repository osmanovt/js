function getThis() {
    console.log(this);
}

getThis();
window.getThis();
console.log(window.getThis);

function getPrice(currency = "$") {
    console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}

const prod1 = {
    name: "Intel",
    price: 100,
    getPrice,
    getName: function () {
        console.log(this.name);
    },
    info: {
        information: ["2.3 ghz"],
        getInfo() {
            console.log(this);
        }
    }
};

prod1.getPrice();
prod1.info.getInfo();

const prod2 = {
    name: "AMD".toUpperCase(),
    price: 200,
    getPrice
};

prod2.getPrice();

prod2.getName = prod1.getName;

prod1.getName();
prod2.getName();

let str = "Hello World";
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

const prod3 = {
    name: "Nvidia",
    price: 100,
    getName,
    getPrice
};

prod3.getName().getPrice();

const prod4 = {
    name: "ASUS",
    price: 100,
};

getPrice.call(prod4, "*");
getPrice.apply(prod4, ["*"]);

const getPriceBind = prod3.getPrice.bind(prod3, "*");       // Привязка контекста
console.log(getPriceBind);

setTimeout(getPriceBind, 1000);

