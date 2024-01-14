function buyFruit(fruitType, weigthGrams, pricePerKg) {
    let weigthKg = weigthGrams / 1000;
    let price = pricePerKg * weigthKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${fruitType}.`);
}

buyFruit('orange', 2500, 1.80);