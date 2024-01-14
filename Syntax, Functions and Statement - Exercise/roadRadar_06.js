function speedLimit(speed, area) {
    let limit;
    let isOverTheLimit = true;

    if (area === 'motorway') {
        limit = 130;
        if (speed <= limit) {
            isOverTheLimit = false;
        }
    } else if (area === 'interstate') {
        limit = 90;
        if (speed <= limit) {
            isOverTheLimit = false;
        }
    } else if (area === 'city') {
        limit = 50;
        if (speed <= limit) {
            isOverTheLimit = false;
        }
    } else if (area === 'residential') {
        limit = 20;
        if (speed <= limit) {
            isOverTheLimit = false;
        }
    }

    let status;
    if (isOverTheLimit) {
        let difference = speed - limit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

speedLimit(200, 'motorway');