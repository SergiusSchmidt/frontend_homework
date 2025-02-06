//1
let f = "Hello"
let f2 = "World"
let resultf = f + f2
console.log(resultf);

f = "javascript"
console.log(f.toUpperCase());

f = "HELLO"
console.log(f.toLowerCase());

f = "2025"
f = Number(f)
console.log(typeof f);


//2
let a = 5
let b = 10
console.log(a + b);
console.log(a - b);

a = 17 % 3
console.log(a);

a = 7 ** 3
console.log(a);

console.log(Math.sqrt(144));


//3
const big = 12345678901234567890n
console.log(typeof big);
console.log(big);


//4
let isHappy = true;

resultzz = isHappy ? "Счастлив 😊" : "Грустный 😢";
console.log(resultzz);

const klm = Boolean(0)
const klm1 = Boolean(1)
console.log(klm);
console.log(klm1);


//5
let x;
let y = null;

console.log(x);
console.log(y);

//6
let id = Symbol("id");
let id2 = Symbol('id');
console.log(id2 == id);

//7
let string = +"15"
console.log(typeof string);
let string2 = "15"
console.log(typeof string2);
let numbr = Number(string2)
console.log(typeof numbr);

let string8 = "15"
let string9 = parseInt(string8)
console.log(typeof string9);

let false1 = "";
isFalse = false;
console.log(typeof isFalse);
isFalse = false1
console.log(typeof isFalse);

let null1 = null;
console.log(typeof null1);
null1 = 10;
console.log(typeof null1);

//8
console.log(5 === "5");// false потому-что строгое сравнение === сначала идет сравнение по типу данных 5 это число а "5" и они не ровны
console.log(5 == "5"); // true потому-что не строгое сравнение == сначала идет преобразование 5 числа к строке "5" и потом две строки сравниваются

console.log(true == 1); // true потому-что любое число true кроме 0 
console.log(false == 0); //false потому-что 0 всегда false

//9
console.log(Math.sqrt(64)); // Вычисление квадратного корня
console.log(12345%2); //  12345 не четное число
console.log(10 + "5"); //это в строку преобразуется = 105



