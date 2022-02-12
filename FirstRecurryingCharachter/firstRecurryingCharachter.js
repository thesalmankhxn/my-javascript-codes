const FirstRecurryingCharachter = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
};

FirstRecurryingCharachter([6, 2, 3, 2, 5, 6, 5, 3]);
