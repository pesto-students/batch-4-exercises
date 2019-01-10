
function savingsAccount(params) {
  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  
  if (params[0].length != 6){
    throw ('Account Number must be a 6-digit number')
  }
  
  if validateEmail(params[1]){
    throw('Invalid e-mail')    
  }
  return {
    '_accountNumber': params[0]',
    '_email': params[1],
    '_firstName': params[2],
    '_lastName': params[3],
    'products': params[4],
  }
  
}

export {
  savingsAccount,
};
