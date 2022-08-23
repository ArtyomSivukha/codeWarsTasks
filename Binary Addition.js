function addBinary(a,b) {
    let sum = a + b;
    const binary = sum.toString(2);
    return binary;
}
console.log(addBinary(1, 1));