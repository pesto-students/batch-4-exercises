
function applyOperator(...args) {
  const operator = args[0];
  if (args.length === 1) return 0;
  if (args.length === 0) new Error("no operator");
  let result;
  switch (operator) {
    case '+': {
      result = args[1];
      args.slice(2).forEach(element => {
        result = element + result;
      });
    }
    break;

    case '-': {
      result = -1 * args[1];
      args.slice(2).forEach(element => {
        result = result - element;
      });
    }
    break;

    case '*': {
      result = args[1];
      args.slice(2).forEach(element => {
        result = element * result;
      });
    }
    break;

    case '/': {
      result = args[1];
      args.slice(2).forEach(element => {
        result = result / element;
      });
      result = parseFloat(result.toFixed(4));
    }
    break;

    case '%': {
      result = args[1];
      args.slice(2).forEach(element => {
        result = result % element;
      });
    }
    break;

    
  }
  return result;
}

export {
  applyOperator,
};
