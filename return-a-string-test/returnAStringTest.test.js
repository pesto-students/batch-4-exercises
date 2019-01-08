const returnAString = () => 'hello word';

describe('returnAString', () => {
  test('should return a string', () => {
    expect(returnAString()).toContain('word');
  });
});
