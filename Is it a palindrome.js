function isPalindrome(x) {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
console.log(isPalindrome("Abba"));

