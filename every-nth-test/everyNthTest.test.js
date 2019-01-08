const everyNth = (string, n) => string.split('').filter((a, i) => (i+1) % n === 0).join('');

describe('everyNth test', () => {
  test('should get every nth character in given string', () => {
    const actual = everyNth('iLoveJavaScript', 3);
    const expected = 'oJart';

    expect(actual).toEqual(expected);
  });
});
