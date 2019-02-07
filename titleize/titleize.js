const isNotALetter = character => !character.match(/[a-zA-Z]/);

const lastCharacter = string => string[string.length - 1];

function titleize(sentence) {
  const characters = sentence.toLowerCase().split('');

  return characters.reduce((acc, character, index) => {
    const lastCharacterInResult = lastCharacter(acc);

    let characterToAdd;

    if (index === 0) {
      characterToAdd = character.toUpperCase();
    } else if (isNotALetter(lastCharacterInResult)) {
      characterToAdd = character.toUpperCase();
    } else {
      characterToAdd = character;
    }

    return acc + characterToAdd;
  }, '');
}

export {
  titleize,
};
