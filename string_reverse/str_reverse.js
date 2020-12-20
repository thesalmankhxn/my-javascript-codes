const { performance } = require('perf_hooks');

function reverseStr(str) {

    // return str.split("").reverse().join("");

    let final = "";
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }
    return final;
}

let s = "SK77 is King";

let t1 = performance.now();
console.log(reverseStr(s));
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);