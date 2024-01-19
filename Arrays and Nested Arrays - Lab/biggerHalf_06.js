function biggerHalf(array) {
    array.sort((a, b) => a - b);

    let half = Math.floor(array.length / 2);

    return array.slice(half);
}

console.log(biggerHalf([4, 7, 2, 5]));