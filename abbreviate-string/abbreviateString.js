function abbreviateString(name) {
  if (typeof name !== 'string') {
    throw new Error('only string are accepted');
  }

  const nameBreakDown = name.split(' ');
  const firstname = nameBreakDown[0];
  const lastName = nameBreakDown[nameBreakDown.length - 1];

  return `${firstname} ${lastName[0].toUpperCase()}.`;
}

export { abbreviateString };
