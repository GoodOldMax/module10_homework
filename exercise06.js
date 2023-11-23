const arr = [1, 1, 1];

let equal = true;

for (let i = 0; i < (arr.length - 1); i++) {
    let currentValue = arr[i];
    let nextValue = arr[i+1];
    if (currentValue !== nextValue) {
        equal = false;
    }
}

console.log(equal);
