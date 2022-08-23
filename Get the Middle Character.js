function getMiddle(s) {
    let a = s.split("");
    let half = s.length/2;
    let firstHalf = s.slice(0, half);
    let secondHalf = s.slice(half);
    if (firstHalf.length > secondHalf.length) {
        return neww = firstHalf.charAt(firstHalf.length - 1);
    } else if (firstHalf.length < secondHalf.length) {
        return neww = secondHalf.charAt(0);
    } else {
        return neww = firstHalf.charAt(firstHalf.length - 1) + secondHalf.charAt(0);
    }
   
}
console.log(getMiddle("Artyom"));