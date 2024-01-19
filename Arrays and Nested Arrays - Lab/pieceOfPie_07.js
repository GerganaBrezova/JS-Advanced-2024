function pieceOfPie(array, start, end) {
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end);

    let newArray = array.slice(startIndex, endIndex + 1);
    return newArray;
}

console.log(pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));