function evenPositionElement(array) {
    let evenNumbers = '';

    for (let i = 0; i < array.length; i += 2) {
        evenNumbers += `${array[i]} `;
    }
    console.log(evenNumbers);
}

evenPositionElement(['20', '30', '40', '50', '60']);