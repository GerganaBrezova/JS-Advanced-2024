function solve(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

    let inverseSum = 0;
    for (let i = 0; i < array.length; i++) {
        inverseSum += 1 / array[i];
    }
    console.log(inverseSum);

    let concatanated = array.join("");
    console.log(concatanated);
}

solve([1, 2, 3]);