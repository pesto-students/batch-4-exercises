const fs = require('fs');
const path = require('path');

function filteredNames(folderPath, extension) {
  let allFiles = [];

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return [];
    }
    for (const file of files) {
      if (fs.lstatSync(path.join(folderPath, file)).isDirectory()) {
        filteredNames(path.join(folderPath, file), extension);
        allFiles = allFiles.concat(filteredNames(folderPath, extension));
      }
      if (path.extname(file) === extension) {
        allFiles.push(file);
      }
    }
    return allFiles;
  });
  return allFiles;
}

export {
  filteredNames,
};
