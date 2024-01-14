function extractWords(input) {
    return input.split(/[^a-zA-z0-9]+/)
                .filter(el => el !== "")
                .map(el => el.toUpperCase())
                .join(", ");
}

console.log(extractWords('Hi, how are you?'));