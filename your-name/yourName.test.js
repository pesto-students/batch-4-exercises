import { yourName } from './yourName';

describe('Nitin Patel', () => {
  test('yourName should return my name', () => {
    expect(yourName()).toBe('Nitin Patel');
  });
});
