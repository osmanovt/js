const names = ["Tural", "Atash", "Samir", "Diana", "Esfir"];

function mapArray(arr, cb) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(cb(arr[i]));
    }
    return res;
}

function nameLength(el) {
    console.log(el);
    return el.length;
}

function nameToUppercase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUppercase);
console.log(result);
console.log(result2);

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

const testGreeting = greeting("Tural");
const fullName = testGreeting("Osmanov");
const fullName2 = greeting("Tural")("Osmanov");
console.log(fullName);
console.log(fullName2);

function question(job) {
    if (job === "developer") {
        return function (name) {
            return `${name}, что такое JS?`;
        };
    } else if (job === "teacher") {
        return function (name) {
            return `${name}, какой предмет вы ведете?`;
        };
    }
}

const developerQuestion = question("developer");
const teacherQuestion = question("teacher");
console.log(developerQuestion("Турал"));
console.log(teacherQuestion("Турал"));

function question2(job) {
    const jobDictionary = {
        developer: "что такое JS",
        teacher: "какой предмет вы ведете",
    };

    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    };
}

const developerQuestion2 = question("developer")("Tural");
console.log(developerQuestion2);