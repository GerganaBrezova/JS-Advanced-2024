function solve(a, b, c){
    let sumLength = a.length + b.length + c.length;
    let average = sumLength / 3;

    console.log(sumLength);
    console.log(average | 0);
}

solve('chocolate', 'ice cream', 'cake');