import { bankBalances } from './dataset.json';

const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

function sumUp(a, b) {
  return a + b;
}

function roundTwoPlaces(num) {
  return Math.round(num * 100) / 100;
}

function hundredThousandairs() {
  return bankBalances.filter(({ amount }) => amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => ({
    ...account,
    rounded: Math.round(account.amount),
  }));
}

function sumOfBankBalances() {
  const sum = bankBalances.map(({ amount }) => parseFloat(amount)).reduce(sumUp);
  return roundTwoPlaces(sum);
}

function sumOfInterests() {
  return roundTwoPlaces(
    bankBalances
      .filter(({ state }) => selectedStates.includes(state))
      .map(({ amount }) => roundTwoPlaces(amount * 0.189))
      .reduce(sumUp, 0),
  );
}

function higherStateSums() {
  const stateBalanceTable = bankBalances.reduce((acc, { state, amount }) => {
    if (state in acc) {
      acc[state] += parseFloat(amount);
    } else {
      acc[state] = parseFloat(amount);
    }
    return acc;
  }, {});

  return Object.values(stateBalanceTable).reduce((acc, cu) => {
    if (cu >= 1000000) {
      return acc + cu;
    }
    return acc;
  });
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
