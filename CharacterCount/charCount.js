const charCount = (str) => {
  const result = {};

  for (const char of str.toLowerCase()) {
    if (char !== " ") {
      result[char] = (result[char] || 0) + 1;
    }
  }

  return result;
};

console.log(charCount("SK77 is KING"));
