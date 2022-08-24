function SeriesSum(n) {
    if (n == 0) {
        return n.toFixed(2).toString();
    }
    let a = 0;
    for (let i = 1; i <= n; i++) {
        let b = 3*i - 2;
        a = 1/b + a;
    }
    return a.toFixed(2).toString();
}

console.log(SeriesSum(0));