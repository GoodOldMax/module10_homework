let number = +prompt('Введите число');

if (isNaN(number) || typeof number !== 'number') {
    console.log('Упс, кажется, вы ошиблись');
} else if (number % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}
