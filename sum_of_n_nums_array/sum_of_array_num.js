let a = [8, 2, 4, 77, 10];
let n = a.length;

function sum (a) {
    let s = 0;
    for(let i = 0; i < n; i++) {
        s += a[i];
    }
    console.log(s);
    return s;
}

sum(a);