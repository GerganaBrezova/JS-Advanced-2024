function solve(month, year) {
    let date = new Date(year, month - 1, 1);

    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    console.log(date.getDate());
}

solve(1, 2012);