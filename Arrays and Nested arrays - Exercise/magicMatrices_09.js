function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let col = 0; col < matrix[0].length; col++) {
        let currentColSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            currentColSum += matrix[col][row];  
        }
        if (currentColSum !== sum) {
            return false;
        }
        
    }
    return true;
}

console.log(magicMatrices([[4, 5, 6],
                           [6, 5, 4],
                           [5, 5, 5]]));