
function templateLiterals() {
  const players = ['Rooney','Ronaldo', 'Messi', 'Pogba'];
  const sentence = `There are ${players.length} people on the football team. Their names are ${players[0]}, ${players[1]}, ${players[2]}, ${players[3]}.`
  return sentence;
}

export {
  templateLiterals,
};
