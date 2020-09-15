function reverseStr(str) {

    // return str.split("").reverse().join("");

    let final = "";
    for (let i = str.length - 1; i >= 0; i--){
        final += str[i];
    }
    return final;
}

let s = "SK77 is King";

console.log(reverseStr(s));