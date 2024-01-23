function createRegistry(array) {
    const result = {};

    for (let line of array) {
        let [town, population] = line.split(' <-> ');

        if (result.hasOwnProperty(town) == false) {
            result[town] = 0;
        }
        
        result[town] += Number(population);
    }
    
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

createRegistry(['Sofia <-> 1200000',
                'Montana <-> 20000',
                'New York <-> 10000000',
                'Washington <-> 2345000',
                'Las Vegas <-> 1000000']);