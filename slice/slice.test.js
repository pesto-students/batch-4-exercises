import { slice } from './slice';

describe('slice', () => {
  it('retrieves the proper sublist of a list', () => {
    const list = [8, 6, 7, 5, 3, 0, 9];
    expect(slice(2, 5, list)).toEqual([7, 5, 3]);
  });

  it('can operate on strings', () => {
    expect(slice(0, 0, 'abc')).toEqual('');
    expect(slice(0, 1, 'abc')).toEqual('a');
    expect(slice(0, 2, 'abc')).toEqual('ab');
    expect(slice(0, 3, 'abc')).toEqual('abc');
    expect(slice(0, 4, 'abc')).toEqual('abc');
    expect(slice(1, 0, 'abc')).toEqual('');
    expect(slice(1, 1, 'abc')).toEqual('');
    expect(slice(1, 2, 'abc')).toEqual('b');
    expect(slice(1, 3, 'abc')).toEqual('bc');
    expect(slice(1, 4, 'abc')).toEqual('bc');
    expect(slice(0, -4, 'abc')).toEqual('');
    expect(slice(0, -3, 'abc')).toEqual('');
    expect(slice(0, -2, 'abc')).toEqual('a');
    expect(slice(0, -1, 'abc')).toEqual('ab');
    expect(slice(0, -0, 'abc')).toEqual('');
    expect(slice(-2, -4, 'abc')).toEqual('');
    expect(slice(-2, -3, 'abc')).toEqual('');
    expect(slice(-2, -2, 'abc')).toEqual('');
    expect(slice(-2, -1, 'abc')).toEqual('b');
    expect(slice(-2, -0, 'abc')).toEqual('');
  });
});
