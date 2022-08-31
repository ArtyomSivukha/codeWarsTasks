function squareSum(numbers){
    let multi = 0
    for (let i = 0; i < numbers.length; i++) {
      multi += numbers[i]*numbers[i];
    }
    return multi;
  }
console.log(squareSum([4, 5, 1]));