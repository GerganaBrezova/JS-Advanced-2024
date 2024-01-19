function diagonalSums(matrix) {
    let main = 0;
    let secondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
    }

    for (let row = 0; row < matrix.length; row++) {
        secondary += matrix[row][matrix.length - row - 1];
    }

    console.log(main, secondary);
}

diagonalSums(
    [[20, 40],
     [10, 60]]
);