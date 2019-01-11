import {
  subMilliseconds
} from "date-fns";

function addBigIntegers(inpString) {
  const numbers = inpString.split("/n")
  const parsedNums = numbers.map(BigInt)

  function sum(a, b) {
    return a + b
  }
  const finalSum = parsedNums.reduce(sum(a, b), 0)
  return finalSum

}

export {
  addBigIntegers,
};