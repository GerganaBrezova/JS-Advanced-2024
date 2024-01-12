function solve(input) {
    let typeOfInput = typeof(input);

    if (typeOfInput === `number`) {
        let areaCircle = Math.PI * input**2;
        console.log(areaCircle.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

solve(5);
solve(`name`);