function displayInfo() {
    let obj = {};

    Array.from(arguments).forEach(ar => {
        let type = typeof (ar);
        console.log(`${type}: ${ar}`);

        if (!obj[type]) {
            obj[type] = 0;
        }
        obj[type]++;
    });

    Object.keys(obj).sort((a, b) => obj[b] - obj[a])
                    .forEach(key => console.log(`${key} = ${obj[key]}`));
}
displayInfo('cat', 42, function () { console.log('Hello world!'); });