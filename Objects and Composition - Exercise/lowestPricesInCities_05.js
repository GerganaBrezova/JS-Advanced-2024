function findLowestPrice(array) {
    let products = [];

    while (array.length > 0) {
        let [town, product, price] = array.shift().split(' | ');

        if (products.filter(el => el.product === product).length > 0) {
            let object = products.find(el => el.product === product);

            if (object.price > Number(price)) {
                object.price = Number(price);
                object.town = town;
            }
        } else {
            products.push({ product, town, price: Number(price) });
        }
    }
    for (let product of products) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}

findLowestPrice(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']);