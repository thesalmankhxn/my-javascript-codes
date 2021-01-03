// Debouncing

let counter = 0;
const getData = () => {

    // calls an API and gets Data
    console.log('Fetching Data', counter++);
};

const debounce = function (fn, d) {
    return function () {
        setTimeout
    };
};

const betterGetData = debounce(getData, 300);