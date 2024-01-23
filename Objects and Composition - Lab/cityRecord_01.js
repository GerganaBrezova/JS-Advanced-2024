function returnObject(name, population, treasury) {
    const cityObject = {
        name,
        population,
        treasury
    }
    return cityObject;
}

console.log(returnObject('Tortuga', 7000, 15000));