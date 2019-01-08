const everyNth = (string, n) => string
    .split('')
    .filter((a, i) => i % n === n - 1)
    .join('');

describe('everyNth test', () => {
  test('should get every nth character in given string', () => {
    const actual = everyNth('iLoveJavaScript', 3);
    const expected = 'oJart';

    expect(actual).toEqual(expected);
  });
});
