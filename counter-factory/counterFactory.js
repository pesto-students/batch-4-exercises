
function counterFactory(...args) {
  var a = 0
  return {
  "increment" : function(){
    a = a+1
    return a
  },
  "decrement" : function(){
    a = a-1
    return a
  },

}
}

export {
  counterFactory,
};
