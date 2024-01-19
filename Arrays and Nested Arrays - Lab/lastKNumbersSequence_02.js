function returnSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let nextElement = 0;

        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            nextElement += sequence[j];
        }
        sequence.push(nextElement);
    }
    return sequence;
}

console.log(returnSequence(6, 3));