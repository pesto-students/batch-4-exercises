function placeInMiddle(inputs, middle) {
  const firstHalf = inputs.slice(0, Math.floor(inputs.length / 2));
  const secondHalf = inputs.slice(Math.floor(inputs.length / 2));

  return [...firstHalf, ...middle, ...secondHalf];
}

export { placeInMiddle };
