const not = condition => !condition;

const isString = expression => typeof expression === 'string';

const hasInvalidOperators = (expression) => {
  const inValidOperators = ['(', ')', '^', '.'];
  return expression.split('').some(element => inValidOperators.includes(element));
};

const removeWhiteSpaces = string => string.replace(/\s/g, '');

const isNumber = string => Boolean(Number(string)) || string === '0';

const notNull = arg => arg !== null;

const splitIntoTokens = (expression) => {
  const expressionToEvaluate = removeWhiteSpaces(expression).split('');

  return expressionToEvaluate.reduce((accumulator, current) => {
    if (not(isNumber(current))) {
      return [...accumulator, current];
    }

    if (isNumber(accumulator[accumulator.length - 1])) {
      accumulator[accumulator.length - 1] = Number(
        (accumulator[accumulator.length - 1] || '') + current,
      );
    } else {
      return [...accumulator, Number(current)];
    }
    return accumulator;
  }, []);
};

const performOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('invalid operator');
  }
};

const handleOperator = operator => (expression) => {
  let expressionCopy = expression.slice();
  while (expressionCopy.includes(operator)) {
    const index = expressionCopy.findIndex(el => el === operator);
    const leftIndex = index - 1;
    const rightIndex = index + 1;
    const result = performOperation(
      expressionCopy[leftIndex],
      expressionCopy[rightIndex],
      operator,
    );
    expressionCopy[index] = result;
    expressionCopy[leftIndex] = null;
    expressionCopy[rightIndex] = null;
    expressionCopy = expressionCopy.filter(notNull);
  }
  return expressionCopy;
};

function arithmeticExpressionEvaluator(expressionProvided) {
  if (not(isString(expressionProvided))) {
    throw new Error('string expected');
  }

  if (hasInvalidOperators(expressionProvided)) {
    throw new Error('expression not supported');
  }

  let expressionCopy = splitIntoTokens(expressionProvided);
  expressionCopy = handleOperator('/')(expressionCopy);
  expressionCopy = handleOperator('*')(expressionCopy);
  expressionCopy = handleOperator('-')(expressionCopy);
  expressionCopy = handleOperator('+')(expressionCopy);

  return expressionCopy.pop();
}

export { arithmeticExpressionEvaluator };
