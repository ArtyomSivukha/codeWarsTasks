function maps(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }
    return arr;
}
console.log(maps([1, 2, 3]));