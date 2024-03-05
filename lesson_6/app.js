let a = 1;
let b = 2;

if (a > 0) {
    b = a;
} else {
    b += 1;
}

let c = a > 0 ? b = a : b += 1;
b = a > 0 ? a : b + 1;

console.log(c);
console.log(b);

b = a > 0 ? 2 : a < 0 ? 3 : 0;
console.log(b);

let color = "yellow";

switch (color) {
    case "yellow" :
    case "red":
        console.log("color is red or yellow");
        break;
    case "green":
        console.log("color is green");
        break;
    default:
        console.log("Default");
}
