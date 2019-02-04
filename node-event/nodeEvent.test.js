import { nodeEvent } from './nodeEvent';

describe('Template Test', () => {
  const name = 'Ravi';
  const result = nodeEvent(name);
  it('should get hello name', () => {
    expect(result).toBe(`hello ${name}`);
  });
});
