function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }
console.log(reverseWords("My name Artyom"))