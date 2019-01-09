function isPrime(num){
  if(num == 2){
    return true;
  } else if(num == 1){
    return false;
  } else {
    for(var i = 2;i<=num;i++){
      if(num % i == 0){
        return false;
      }
    }
    return true;
  }
}
function sumPrimes(num) {
  var result = 0;
  for(var i = 2;i<=num;i++){
    if(isPrime(i)){
      result = result + i;
    }
  }
  return result;
}

export {
  sumPrimes,
};
