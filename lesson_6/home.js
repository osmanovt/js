let display = "inline";

if (display === "block") {
    console.log("block");
} else if (display === "none") {
    console.log("none");
} else if (display === "inline") {
    console.log("inline");
} else {
    console.log("other");
}

switch (display) {
    case "block":
        console.log("block");
        break;
    case "inline":
        console.log("inline");
        break;
    case "none":
        console.log("none");
        break;
    default:
        console.log("other");
}