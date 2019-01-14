
function greet(subject) {
  const salutation = new Promise((res)=>{
    res('Hey '+ subject)
  })
  return salutation
}

export {
  greet,
};
