const {
  bankBalances,
} = require('./dataset.json');
// {
//   "amount": "822370.71",
//   "state": "ME"
// }
function hundredThousandairs() {
  return bankBalances.filter(element => element.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map((element) => {
    const newElement = JSON.parse(JSON.stringify(element));
    newElement.rounded = Math.round(element.amount);
    return newElement;
  });
}

function sumOfBankBalances() {
  let newSum = 0.0;
  bankBalances.forEach((bankBalance) => {
    newSum += bankBalance[0];
  });
  return newSum;
}

function sumOfInterests() {
  return bankBalances.reduce((sum, bankBalance) => {
    const interestWithBalance = bankBalance[0] + bankBalance[0] * 0.189;
    return sum + interestWithBalance;
  }, 0);
}

function higherStateSums() {}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
