function requestValidator(request) {
  if (Object.prototype.hasOwnProperty.call(request, 'method')) {
    if (request.method !== 'GET') {
      throw new Error('Invalid request header: Invalid Method');
    }
  } else {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (Object.prototype.hasOwnProperty.call(request, 'uri')) {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (!request.uri.match(regex)) {
      throw new Error('Invalid request header: Invalid URI');
    }
  } else {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!Object.prototype.hasOwnProperty.call(request, 'version')) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (Object.prototype.hasOwnProperty.call(request, 'message')) {
    if (typeof request.message !== 'string') {
      throw new Error('Invalid request header: Invalid Message');
    }
  } else {
    throw new Error('Invalid request header: Invalid Message');
  }
  return request;
}

export { requestValidator };
