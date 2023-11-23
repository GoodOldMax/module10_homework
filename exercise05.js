const arr = [4, 8, 15, 16, 23, 42];

console.log(`Число элементов массива: ${arr.length}`);

arr.map(function(item, index, array) {
    console.log(item);
});
