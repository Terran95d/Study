'use_strict';

let number = Math.floor(Math.random() * (150 - 10)) + 10;
console.log(number);
if (number < 50) {
    console.log('Меньше 50');
} else if (number > 50) {
    console.log('Больше 50');
} else {
    console.log('Что то пошло не так');
}