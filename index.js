function countLetter(word, letterToCount) {
    let count = 0;
    for (const letter of word) {
        if (letterToCount.toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countLetter("David Days", "D"));