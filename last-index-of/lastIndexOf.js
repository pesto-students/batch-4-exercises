function lastIndexOf(element, array) {
  return array.reduce(
    (acc, item, index) => (item === element ? index : acc),
    -1,
  );
}

export { lastIndexOf };
