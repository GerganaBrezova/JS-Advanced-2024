function sameNumbers(number) {
    let numberAsString = number.toString();
    let digitToCompare = numberAsString[0];
    let sumDigits = 0;
    let isSame = true;

    for (let i = 0; i < numberAsString.length; i++) {
        sumDigits += +numberAsString[i];

        if (numberAsString[i] !== digitToCompare) {
            isSame = false; 
        }
        
    }

    console.log(isSame);
    console.log(sumDigits); 
}

sameNumbers(2222222);