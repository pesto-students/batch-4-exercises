const url = require('url');

function convertToFileUrl(fileName) {
  return url.pathToFileURL(fileName);
}

export { convertToFileUrl };
