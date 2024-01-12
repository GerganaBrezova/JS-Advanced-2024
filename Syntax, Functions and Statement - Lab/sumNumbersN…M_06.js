function solve(n, m) {
    let nParsed = Number(n);
    let mParsed = Number(m);

    let sum = 0;
    for (let i = nParsed; i <= mParsed; i++) {
        sum += i;
    }

    console.log(sum);
}

solve('1', '5');
solve('-8', '20');