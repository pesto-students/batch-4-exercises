function longestWordInString(...args) {
  var sentence = args[0]
  var tokens = sentence.split(" ")
  var current_longest = 0
  tokens.forEach(element => {
    if (element.length > current_longest) {
      current_longest = element.length
    }
  });
  return current_longest
}

export {
  longestWordInString,
};