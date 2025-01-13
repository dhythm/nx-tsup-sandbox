import { hello } from './utils';

describe('utils', () => {
  it('should run successfully', () => {
    expect(hello()).toBe('Hello Foo!');
  });
});
