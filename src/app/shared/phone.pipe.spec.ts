import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;

  beforeEach(() => {
    pipe = new PhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform value with default separator', () => {
    const input = '01.23.45.67.89';
    const expectedOuput = '01 23 45 67 89';
    expect(pipe.transform(input)).toBe(expectedOuput);
  });

  it('should transform value with defined separator', () => {
    const input = '01.23.45.67.89';
    const expectedOuput = '01-23-45-67-89';
    expect(pipe.transform(input, '-')).toBe(expectedOuput);
  });

  it('should not transform value with nothing to replace', () => {
    const input = '0123456789';
    expect(pipe.transform(input)).toBe(input);
  });

  it('should handle non string value', () => {
    const input: any = 123456789;
    expect(pipe.transform(input)).toBe(input);
  });

  it('should handle undefined value', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should handle null value', () => {
    expect(pipe.transform(null)).toBeNull();
  });
});
