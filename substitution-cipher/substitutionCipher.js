const asciiLowercaseA = 'a'.charCodeAt();
const asciiUppercaseA = 'A'.charCodeAt();

const isEven = num => num % 2 === 0;
const isLowerCase = char => char.toLowerCase() === char;
const isInAlphabet = char => char.match(/[A-Za-z]/g);
const not = condition => !condition;

const encrypt = codeOfFirstChar => (charToEncrypt) => {
  const codePoint = charToEncrypt.charCodeAt();
  const letterNumber = codePoint - codeOfFirstChar;
  let newLetterNumber;
  if (isEven(letterNumber)) {
    newLetterNumber = (letterNumber + 4) % 26;
  } else {
    newLetterNumber = (letterNumber + 6) % 26;
  }

  return String.fromCharCode(newLetterNumber + codeOfFirstChar);
};

const encryptUpperCase = encrypt(asciiUppercaseA);
const encryptLowercase = encrypt(asciiLowercaseA);

const encryptWithCipher = (char) => {
  if (not(isInAlphabet(char))) {
    return char;
  }
  if (isLowerCase(char)) {
    return encryptLowercase(char);
  }
  return encryptUpperCase(char);
};

function substitutionCipher(message) {
  const characters = Array.from(message);

  const cipher = characters.map(encryptWithCipher);

  return cipher.join('');
}

export { substitutionCipher };
