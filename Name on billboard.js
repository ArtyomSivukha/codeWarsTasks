function billboard(name, price = 30){
    let a = 0;
    for (let i = 0; i < name.length; i++) {
    a = a + price;
  }
  return a;
} 
console.log(billboard("STDERR", 25))