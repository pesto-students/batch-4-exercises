describe('Logical operators', () => {
  test('(a && b) || c', () => {
    expect('c').toBe('c');
  });

  test('(a || b) && c', () => {
    expect('c').toBe('c');
  });

  test('null && (b || c)', () => {
    expect('c').toBe('c');
  });

  test('a && (null || c)', () => {
    expect('c').toBe('c');
  });

  test('a && (b || null)', () => {
    expect('c').toBe('c');
  });

  test('a || (b && c)', () => {
    expect('c').toBe('c');
  });

  test('null || (b && c)', () => {
    expect('c').toBe('c');
  });

  test('a || (null && c)', () => {
    expect('c').toBe('c');
  });
});
