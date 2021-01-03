// let sum = function (a) {
//     return function (b) {
//         if (b){
//             return sum(a + b);
//         }
//         return a;
//     }
// }

let sum = (a) => {
    return (b) => {
        return b ? sum(a + b) : a;
    }
}
document.querySelector('h1').innerHTML = (sum(1)(2)(3)(4)());