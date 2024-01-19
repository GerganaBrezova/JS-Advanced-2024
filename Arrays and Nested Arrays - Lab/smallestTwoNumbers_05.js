function smallestTwoNumbers(array) {
    let firstSmallestNum = Math.min(...array);
    array.splice(array.indexOf(firstSmallestNum), 1);

    let secondSmallestNum = Math.min(...array);
    array.splice(array.indexOf(secondSmallestNum), 1);

    console.log(firstSmallestNum, secondSmallestNum);
}

smallestTwoNumbers([30, 15, 50, 5]);