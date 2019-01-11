function abbreviateString(input) {
  if (typeof (input) != "string") {
    throw ("Invaid input.String required")
  }
  const stringArr = input.split(" ")
  const finalString = stringArr[0] + " " + stringArr[stringArr.length - 1][0].toUpperCase() + "."
  return finalString
}

export {
  abbreviateString,
};
