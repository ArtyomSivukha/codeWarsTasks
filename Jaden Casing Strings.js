function jade(quotes) {
    let newArr = [];
    let correctArr = [];
    let neew = " ";
    newArr = quotes.split(" ");
    for (let i = 0; i < newArr.length; i++){
        let newee = correctArr.push(newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1));

        neew = correctArr.join(" ");
    }
    return neew;
}
console.log(jade("How can mirrors be real if our eyes aren't real"));