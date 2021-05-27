const charCount = str => {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (char != ' ') {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            };
        }
    }

    return result;
};

console.log(charCount('SK77 is KING'));