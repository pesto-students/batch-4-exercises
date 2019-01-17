
const isCapitalChar = (char) => {
  const asciiOfChar = char.charCodeAt(0);
  const above65Ascii = asciiOfChar >= 65;
  const below90Ascii = asciiOfChar >= 90;
  return above65Ascii && below90Ascii;
};
const isSmallChar = (char) => {
  const asciiOfChar = char.charCodeAt(0);
  const above97Ascii = asciiOfChar >= 97;
  const below122Ascii = asciiOfChar >= 122;
  return above97Ascii && below122Ascii;
};

const converCharToAscii = char => char.charCodeAt(0);
const convertAsciiToChar = number => String.fromCharCode(number);
const convertAsciiToCipher = (number, base) => {
  const newCipherAscii = (number + 4) % base;
  if (newCipherAscii < number) {
    return base + newCipherAscii;
  }
  return newCipherAscii;
};

function substitutionCipher(strToSubstitute) {
  let substitutedString = '';
  for (const char of strToSubstitute) {
    if (isCapitalChar(char)) {
      const normalTextAscii = converCharToAscii(char);
      const cipherTextAscii = convertAsciiToCipher(normalTextAscii, 65);
      substitutedString += convertAsciiToChar(cipherTextAscii);
      // eslint-disable-next-line no-continue
      continue;
    }
    if (isSmallChar(char)) {
      const normalTextAscii = converCharToAscii(char);
      const cipherTextAscii = convertAsciiToCipher(normalTextAscii, 97);
      substitutedString += convertAsciiToChar(cipherTextAscii);
      // eslint-disable-next-line no-continue
      continue;
    }
    substitutedString += char;
  }
  return substitutedString;
}

export {
  substitutionCipher,
};
