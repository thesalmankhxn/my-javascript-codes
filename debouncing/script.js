// Debouncing

let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterGetData = debounce(getData, 300);

// https://chatgpt.com/c/679ea709-f4a4-8002-905d-f7377cec8e79
