const boxes = ["a", "b", "c", "d", "e"];

const logAllPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

logAllPairs(boxes);
