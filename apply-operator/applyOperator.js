
function applyOperator(...args) {
  switch(args[0]){
    case '+':
      var sum = 0
      args[1].forEach(element => {
        sum+=element
      });
      return sum
    case '-':
      var sum = 0
      args[1].forEach(element => {
        sum-=element
      });
      return sum
    case '*':
      var sum = 1
      args[1].forEach(element => {
        sum*=element
      });
      return sum
    case '/':
      var sum = 1
      args[1].forEach(element => {
        sum /= element
      });
      return sum
      case '%':
      var sum = 1
      args[1].forEach(element => {
        sum %= element
      });
      return sum

  }
}

export {
  applyOperator,
};
