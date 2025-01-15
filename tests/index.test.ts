
import { validateConfig } from '../src/validator'

describe('testing index file', () => {
  test('can validate', () => {
    validateConfig({})
    expect(0 + 0).toBe(0);
  });


});
