const arr1 = [15, 42, 31, 4,];
const arr2 = [14, 115, 2, 11];

const mergedArr = [...arr1, ...arr2];

const SortArr = (arr) => arr.sort((a, b) => a - b);

console.log(mergedArr);