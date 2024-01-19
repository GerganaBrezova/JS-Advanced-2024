function produceNewArray(array) {
    let newArray = [];

    for (let num of array) {
        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num)
        }
    }

    for (let num of newArray) {
        console.log(num);
    }
}

produceNewArray([7, -2, 8, 9]);