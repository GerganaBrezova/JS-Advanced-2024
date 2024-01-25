function createRegister(array) {
    let heroes = [];

    for (let index = 0; index < array.length; index++) {
        let currentHero = array[index];
        let [name, level, items] = currentHero.split(' / ');

        let heroObject = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        };
        heroes.push(heroObject);
    }
    let heroJson = JSON.stringify(heroes);
    console.log(heroJson);
}

createRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);