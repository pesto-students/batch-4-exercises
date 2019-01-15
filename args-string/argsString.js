
function argsString(templateHolderString, variableArray) {
  let replaceTemplatedString = templateHolderString;
  for (const replaceWord of variableArray) {
    if (templateHolderString.indexOf('{}') < 0) {
      break;
    }
    replaceTemplatedString = replaceTemplatedString.replace('{}', replaceWord);
  }
  return replaceTemplatedString;
}

export {
  argsString,
};
