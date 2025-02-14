function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello('John');



function sum(t, z) {
    return t + z;
}
let result = sum(3, 6)
console.log(result);



function isEvan(number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}
let result1 = isEvan(5);
console.log(result1);



let multiply = function (f, j) {
    return f * j;
}
let result2 = multiply(5, 8);
console.log(result2);



const square = (number) => {
    return number * number;
}
let result3 = square(25);
console.log(result3);



function greet(name) {
    if (name == undefined) {
        name = "Guest"
        return "Привет " + name + "!";
    } else {
        return name + " Привет!"
    }
}
let gratulation = greet()
console.log(gratulation);



function introduce(name, age) {
    return "My name is " + name + " and I am " + age + " years old."
}
let result5 = introduce("John", 23);
console.log(result5);



function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let fulName = getFullName("John", "Smith")
console.log(fulName);



const divide = (number1, number2) => {
    return number1 / number2;
}
let result6 = divide(5, 5);
console.log(result6);



function getMax(params1, params2) {
    if (params1 > params2) {
        return params1;
    } else {
        return params2;
    }
}
let result7 = getMax(8, 8);
console.log(result7);
















