import os from 'os';
import { homeDir } from './homeDir';

describe('Template Test', () => {
  test('Template Test', () => {
    expect(os.homedir()).toBe(homeDir());
  });
});
