console.log("HEllo JS")

// 1. string - является примитивом

let qwerty;
qwerty = 133;

qwerty = "USA";
console.log(qwerty);

const apple = "apple";
// apple = 33;
// console.log(apple);

// wsdfsdfsdfsfsd
// sdfsdfsfdsf

let str1 = "можно в двойных"
let str2 = 'можно в одинарных'

let str3 = "13" // это строка
let str4 = str1 + str2;
console.log(str4);
console.log(str1.toUpperCase());

// 2. Number

let num = 9;
let num2 = 9.6;

// 3. bigInt

let num3 = 1239n;

// 4. Boolean

let isDrunk = false;

if (isDrunk) {
    console.log("Ты пьян")
}
const result = isDrunk ? 'Ты пьян' : "Ты не пьян";
console.log(result);

// 5. undefined

let str5;
console.log(str5);

// 6. null
// null - отсутствие значения
// null можно присвоить

let empty = null;
console.log(empty);


// 7. symbol
// Новый тип  используется для создания уникальных значений программы

let s1 = Symbol("something")

console.log(s1);


//ПРЕОБРАЗОВАНИЕ ТИПОВ В JS

// 1. преобразование в строку
// неявное преобразование

let str7 = "" + 9; // "" + "9" = "9"

console.log(typeof str7);

//явное преобразование
const num4 = 10;
let str8 = String(num4);
console.log(typeof str8);

//Пример

const res = 9 + 12 + "5" // "21" + "5" = "215"

const res2 = "5" + 9 + 12; // "5912"

// Преобразование в число неявное

const num5 = +"6"// 
console.log(typeof num5);
const sum = +"9" + +"10"; // 19

//Явное преобразование

const num6 = Number("117") // 117
console.log(typeof num6);
const num7 = Number("1234*&^") // NaN not a number появляется в
// результате неудачного преобразования или неудачной математической операции
console.log(typeof num7)
console.log(num7);
console.log(typeof NaN);

console.log(NaN + 10)


// Преобразование в булевое значение
// число в булевое значение

const res4 = Boolean(9) // true
const res5 = Boolean(0) // false
const res6 = Boolean(-1) // true

// Преобразование строки  в булевое значение

const res7 = Boolean("") // false
const res8 = Boolean(" ") // true


// Равенство строгое и нестрогое
// = - присвоение
// == - не строгое
// === - строгое

console.log(9 === "9");// false
console.log(9 == "9"); // true "9" == "9" = true


isDrunk = false
if (isDrunk) {
    console.log("выполнится, если условие истинное (true)")
} else {
    console.log("выполнится, если условие ложное (false)")
}


console.log(("b" + "a" + + "a" + "a").toLowerCase()); // "ba"+ NaN = "ba" + "NaN" = "baNaN" + "a" = "baNaNa"

console.log(+"a");

function getWeatherDiscription(code) {

    switch (code) {
        case 'sunny':
            return 'Солнечно';
        case 'cloudy':
            return 'Облачно';
        case 'rainy':
            return 'Дождливо';
        case 'snowy':
            return 'Снежно';
        default:
            return "Неизвестные погодные условия"
    }
}
console.log(getWeatherDiscription('rainy'));

// МАССИВ  - ДИНАМИЧЕСКИЙ МАССИВ
// ДЛИНА НЕ ФИКСИРОВАНА

//Два способа создания массива

const arr1 = []; // 1 способ

const arr2 = new Array(); // 2 способ

// Как добавить значение по индексу
const fruits = ['apple', 'mango', 'orange'];
fruits[0] = "carrot";
fruits[1] = "gun";
console.log(fruits);
// Как получить значение по индексу

console.log(fruits[0]);

console.log(fruits.length)

// Методы работы с массивами

const students = [];
students.push("John"); // добавили справа
students.push("Tom"); //  добавили справа
console.log(students);

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

let a = 5
let b = 10
console.log(a + b);
console.log(a - b);

a = 17 % 3
console.log(a);

a = 7 ** 3
console.log(a);

console.log(Math.sqrt(144));

const big = 12345678901234567890n
console.log(typeof big);
console.log(big);

let isHappy= true;

 resultzz = isHappy ? "Счастлив 😊" : "Грустный 😢";
console.log(resultzz);

const klm = Boolean(0)
const klm1 = Boolean(1)
console.log(klm);
console.log(klm1);

let x;
let y=null;

console.log(x);
console.log(y);


