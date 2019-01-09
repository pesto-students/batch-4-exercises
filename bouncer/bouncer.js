
function bouncer(arr) {
  return arr.filter(el => {
    if(el){
      return el;
    }
  });
}

export {
  bouncer,
};
