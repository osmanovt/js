let value;

// Number to String
value = String(10);
value = String(10 + 40);
value = (40).toString()

//Boolean to String
value = String(false)   //false String

//Array to String
value = String([1, 2, 3, 4])    //1,2,3 String
//Object to String
value = String({name: 'Tural', age: 20})    //object Object

//Неявное преобразование
value = 30 + ''     //String
value = 30 - ''     //Number
value = 30 - 'sadd' //NaN
value = 30 - '5'    //25 Number
value = 30 * '2'    //60 Number
value = 30 * 'asd'  //NaN
value = true + 10   //11 Number
value = false + 10  //10 Number
value = false + undefined   //NaN

//String to Number
value = Number('23')    //23 Number
value = Number(false)   //0
value = Number(null)    //0
value = Number('false') //NaN
value = Number([1, 2, 3, 4])    //NaN

value = parseInt('200asdasd')     //200
value = parseInt('sdad200')     //NaN
value = parseFloat('200.123px')     //200.123

// Boolean
value = Boolean('hello')    //true
value = Boolean('')         //false
value = Boolean(123)        //true
value = Boolean(0)          //false
value = Boolean(undefined)  //false
value = Boolean({})         //true  Объект всегда true
value = Boolean([])         //true  Массив всегда true

console.log(value);
console.log(typeof value);