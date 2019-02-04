import fs from 'fs';
import path from 'path';

const getLastElement = array => array[array.length - 1];
const getFileExtensionFromName = fileName => getLastElement(fileName.split('.'));

const getFilteredNames = (providedPath, extension, filesFound) => {
  const allSubDirsAndFiles = fs.readdirSync(providedPath);

  for (const fileOrDir of allSubDirsAndFiles) {
    const fullPath = path.join(providedPath, fileOrDir);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();

    if (isDirectory) {
      getFilteredNames(fullPath, extension, filesFound);
    } else if (getFileExtensionFromName(fileOrDir) === extension) {
      filesFound.push(fileOrDir);
    }
  }

  return filesFound;
};

function filteredNamesRecursive(providedPath, extension) {
  return getFilteredNames(providedPath, extension, []);
}

export { filteredNamesRecursive };
