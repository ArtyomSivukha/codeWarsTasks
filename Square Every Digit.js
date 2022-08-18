function squareDigits(num){
  arrOfDigits = Array.from(String(num), num => num*num);
  arrayStringNumbers = Array.from(arrOfDigits, String);
  return endNumber = Number(arrayStringNumbers.join(''));

}
console.log(squareDigits(609));