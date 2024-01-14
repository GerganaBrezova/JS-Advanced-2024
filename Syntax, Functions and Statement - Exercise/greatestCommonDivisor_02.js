function gcd(x, y) {
    let fisrtNumber = Number(x);
    let secondNumber = Number(y);

    while (fisrtNumber !== secondNumber) {
        if (fisrtNumber > secondNumber) {
            fisrtNumber -= secondNumber;
        } else if (secondNumber > fisrtNumber) {
            secondNumber -= fisrtNumber;
        }
    }
    console.log(fisrtNumber);
}

gcd(15, 5);