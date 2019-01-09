
function applyOperator(operation,...args) {
  var result = 0;
  if(typeof operation == 'undefined'){
    throw 'No operator specified';
  }
  if(args.length){
    switch(operation){
      case '+':
        args.forEach((el)=> result = result + el);
        break;
      case '-':
        args.forEach((el)=> result = result - el);
        break;
      case '*':
        args.forEach((el)=> result = result * el);
        break;
      case '/':
        args.forEach((el)=> result = result / el);
        break;
      case '%':
        args.forEach((el)=> result = result % el);
        break;
    }
    return result;
  } else {
    return 0;
  }
}

export {
  applyOperator,
};
