function composeObject(array) {
    let result = {};

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let cal = Number(array[i + 1]);

        result[food] = cal;
    }
    console.log(result);
}

composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);