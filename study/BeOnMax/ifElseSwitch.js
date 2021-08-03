'use_strict';

let number = Math.floor(Math.random() * (150 - 10)) + 10;
console.log(number);
let num = 50;

if (number < 50) {
    console.log('Меньше 50');
} else if (number > 50) {
    console.log('Больше 50');
} else {
    console.log('Что то пошло не так');
}

switch (num) {
    case 50:
        console.log('50');
        break;
    case 40:
        console.log('40');
        break;
    default:
        console.log('Что то пошло не так');
        break;
}