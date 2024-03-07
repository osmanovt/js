const params = {
    width: 25,
    height: 40,
    getSquare() {
        return this.width * this.height;
    }
};

console.log(params.getSquare());

const product = {
    name: "AMD",
    price: 1200,
    discount: "15%",
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price - (this.price / 100 * parseInt(this.discount));
    }
};

console.log(product.getPrice());
console.log(product.getPriceWithDiscount());

const figure = {
    height: 0,
    heightUp() {
        this.height++;
        return this.height;
    }
};
console.log(figure.height = 12);
figure.heightUp();
console.log(figure.height);

const calculator = {
    value: 2,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value = this.value + 1;
        return this;
    },
    minusOne: function () {
        this.value = this.value - 1;
        return this;
    },
};

calculator.double().plusOne().plusOne().minusOne();
console.log(calculator.value);