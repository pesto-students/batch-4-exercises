import fs from 'fs';
import path from 'path';

const not = condition => !condition;
const getLastElement = array => array[array.length - 1];
const getFileExtensionFromName = fileName => getLastElement(fileName.split('.'));

function filteredNames(providedPath, extension) {
  const filesFound = [];
  const allSubDirsAndFiles = fs.readdirSync(providedPath);

  for (const fileOrDir of allSubDirsAndFiles) {
    const fullPath = path.join(providedPath, fileOrDir);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();

    if (not(isDirectory) && getFileExtensionFromName(fileOrDir) === extension) {
      filesFound.push(fileOrDir);
    }
  }

  return filesFound;
}

export { filteredNames };
