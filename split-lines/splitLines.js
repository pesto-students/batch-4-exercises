function splitLines(text, options = {}) {
  const { preserveNewlines } = options;

  return Array.from(text).reduce(
    (lineAccumulator, currentCharacter) => {
      let lastLine = lineAccumulator.pop();

      if (currentCharacter === '\n') {
        if (preserveNewlines) {
          lastLine += currentCharacter;
        }

        return [...lineAccumulator, lastLine, ''];
      }

      if (currentCharacter !== '\r' || preserveNewlines) {
        lastLine += currentCharacter;
      }

      return [...lineAccumulator, lastLine];
    },
    [''],
  );
}

export { splitLines };
