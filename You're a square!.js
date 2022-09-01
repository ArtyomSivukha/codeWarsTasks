var isSquare = function(n){
  let newNum = 0;
  newNum = Math.sqrt(n);
  if (Number.isInteger(newNum)) {
    return true;
  } else {
    return false;
  }
}
console.log(isSquare(25))