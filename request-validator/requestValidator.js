const validMethods = ['GET', 'POST'];
const validUri = /[\w.]+\.[a-z]+/;

function requestValidator(request) {
  if (!validMethods.includes(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!request.uri.match(validUri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (request.message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return request;
}

export { requestValidator };
