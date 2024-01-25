function assembleCar(carObject) {
    let assembledCar = {};
    let engine = {};
    let carriage = {};

    assembledCar.model = carObject.model;

    if (carObject.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (carObject.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (carObject.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    assembledCar.engine = engine;

    carriage.type = carObject.carriage;
    carriage.color = carObject.color;

    assembledCar.carriage = carriage;

    if (carObject.wheelsize % 2 == 0) {
        carObject.wheelsize--;
    }

    assembledCar.wheels = [carObject.wheelsize, carObject.wheelsize, carObject.wheelsize, carObject.wheelsize];

    return assembledCar;
}

console.log(assembleCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))