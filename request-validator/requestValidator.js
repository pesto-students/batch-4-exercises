
function requestValidator(reqObj) {
  const validReq = ['GET','POST','DELETE'];
  const validVer = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1' , 'HTTP/2.0'];
  if(!validReq.includes(reqObj.method)){
    throw 'Invalid request header: Invalid Method';
  }

  if(!reqObj.uri.length || !/(www\.)?[a-zA-Z0-9]+\.com/.test(reqObj.uri)){
    throw 'Invalid request header: Invalid URI';
  }

  if(!validVer.includes(reqObj.version)){
    throw 'Invalid request header: Invalid Version';
  }

  if(!Object.keys(reqObj).includes('message')){
    throw 'Invalid request header: Invalid Message';
  }

  return reqObj;
}

export {
  requestValidator,
};
