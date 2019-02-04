import { EventEmitter } from 'events';

const greetEvent = new EventEmitter();
greetEvent.on('greeting', name => `hello ${name}`);
greetEvent.on('error', () => {
  throw new TypeError('Expected string');
});

function nodeEvent(name) {
  if (typeof name !== 'string') greetEvent.emit('error');
  else return greetEvent.emit('greeting', name);
  return null;
}

export { nodeEvent };
