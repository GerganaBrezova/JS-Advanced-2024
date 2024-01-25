function sortCatalog(array) {
    array.sort((a, b) => a.localeCompare(b));
    
    let char = '';

    for (let i = 0; i < array.length; i++) {
        let [product, price] = array[i].split(' : ');

        let letter = array[i].charAt(0);
        if (letter !== char) {
            console.log(letter);
        }
        console.log(`  ${product}: ${price}`);
        char = letter;
    }
}

sortCatalog(['Appricot : 20.4',
             'Fridge : 1500', 
             'TV : 1499', 
             'Deodorant : 10', 
             'Boiler : 300', 
             'Apple : 1.25', 
             'Anti-Bug Spray : 15', 
             'T-Shirt : 10']);