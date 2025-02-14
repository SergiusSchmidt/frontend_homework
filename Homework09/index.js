//Задание 1
function indexOfNumber(array, indexOfNumber) {
    for (let index = 0; index < array.length; index++) {
        if (indexOfNumber == array[index]) {
            return index;
        }

    }
}
let number = indexOfNumber(let = [4, 7, 56, 32, 77, 21, 55, 8, 2, 8], 77)
console.log(number);




//Задание 2 *

function weather(code) {
    decode(code)
}


function decode(code) {
    switch (code) {
        case "SQ":
            console.log("шквал");
            break;

        case "PO":
            console.log("пыльный вихрь");
            break;

        case "FC":
            console.log("торнадо");
            break;


        case "BR":
            console.log("дымка (видимость от 1 до 9 км)");
            break;


        case "HZ":
            console.log("мгла (видимость менее 10 км)");
            break;


        case "FU":
            console.log("дым (видимость менее 10 км)");
            break;


        case "DS":
            console.log("пыльная буря (видимость менее 10 км)");
            break;


        case "SS":
            console.log("песчаная буря (видимость менее 10 км)");
            break;

        default:
            console.log("погода не определена");
            break;
    }
}
let weather2 = weather("BR");
console.log(weather2);


















