function extract(array) {
    let newArray = [];
    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        
        if (currentElement >= biggestNumber) {
            newArray.push(currentElement);
            biggestNumber = currentElement;
        }
    }
    return newArray;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));