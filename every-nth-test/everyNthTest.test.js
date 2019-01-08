const everyNth = (string, n) => string.split('').filter((a, i) => i % n === 0).join('');

describe('everyNth test', () => {
  test('should get every nth character in given string', () => {
    const actual = everyNth('iLoveJavaScript', 3);

    const expected = 'ivaSi'; // i'm not completely sure about this. does counting for every nth start from zero?, and should the output contain repeating characters? 

    expect(actual).toEqual(expected);
  });
});
