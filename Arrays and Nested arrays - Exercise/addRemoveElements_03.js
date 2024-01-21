function addRemove(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];

        if (currentCommand === 'add') {
            newArray.push(i + 1);
        } else if (currentCommand === 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join('\n'));
    } else {
        console.log('Empty');
    }
}

addRemove(['add', 'add', 'add', 'add']);