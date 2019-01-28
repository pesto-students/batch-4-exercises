function lastIndexOf(value, list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    if (list[i] === value) {
      return i;
    }
  }
  return -1;
}

export { lastIndexOf };
