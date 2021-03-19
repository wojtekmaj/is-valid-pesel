import isValidPESEL from './index';

describe('isValidPESEL', () => {
  it('returns false for no input', () => {
    const result = isValidPESEL();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidPESEL('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidPESEL('010499966fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidPESEL('010499966FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidPESEL('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidPESEL('38282373028');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidPESEL(50062373028);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidPESEL('50062373028');

    expect(result).toBe(true);
  });
});
