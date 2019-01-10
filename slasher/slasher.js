
function slasher(array,to_slash_count) {
  if (to_slash_count >= array.length){
    return []
  }
  array.splice(0,to_slash_count)
  return array
}

export {
  slasher,
};
