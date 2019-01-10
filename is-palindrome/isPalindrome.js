
function isPalindrome(...args) {
  if (args[0].replace(/ /g,'').replace(/[_-]/g, "") === args[0].split("").reverse().join("").replace(/ /g,'').replace(/[_-]/g, "")) {
    return true
  }
  else{
    return false
  }
}

export {
  isPalindrome,
};
