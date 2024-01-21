function sort(array) {
    array = array.sort((a, b) => a.localeCompare(b));

    let number = 1;
    array.forEach(element => {
        console.log(`${number++}.${element}`);
    });
}

sort(["John", "Bob", "Christina", "Ema"]);