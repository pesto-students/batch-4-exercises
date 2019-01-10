import { bankBalances } from './dataset.json';

const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => ({
    ...account,
    rounded: Math.round(account.amount),
  }));
}

function sumOfBankBalances() {
  let sum = 0;
  bankBalances.forEach((account) => {
    sum += parseFloat(account.amount);
  });
  return Math.floor(sum * 100) / 100;
}

function sumOfInterests() {
  let sum = 0;
  bankBalances.forEach((account) => {
    if (selectedStates.includes(account.state)) {
      sum += parseFloat(account.amount) * 1.189;
    }
  });
  return Math.floor(sum * 100) / 100;
}

export {
  hundredThousandairs, datasetWithRoundedDollar, sumOfBankBalances, sumOfInterests,
};
