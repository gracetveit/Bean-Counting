const countBs = function (string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count += 1;
        }
    }
    return count;
}

const countChar = function (string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count += 1;
        }
    }
    return count;
}

console.log(countBs('BBC'));
console.log(countChar("kakkerlak", "k"));