import fs from 'fs';

function filteredNames(directory, extension) {
  const filesWithMatchingExtension = [];

  const contents = fs.readdirSync(directory);
  /* eslint-disable-next-line no-useless-escape */
  const extensionRegEx = new RegExp(`\.${extension}$`);

  contents.forEach((content) => {
    if (content.match(extensionRegEx)) {
      filesWithMatchingExtension.push(content);
    }
  });

  return filesWithMatchingExtension;
}

export {
  filteredNames,
};
