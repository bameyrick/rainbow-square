import { rainbowSquare } from '../src';

describe('raibow-square', () => {
  it('Should throw an error if the width is 0 or less', () => {
    expect(() => rainbowSquare(0)).toThrow();
  });

  it('Should throw an error if the height is 0 or less', () => {
    expect(() => rainbowSquare(256, 0)).toThrow();
  });

  it('Should create a square', async () => {
    const result = await rainbowSquare(100);

    expect(result).toEqual(jasmine.any(String));

    const result2 = await rainbowSquare(256);

    expect(result2).toEqual(jasmine.any(String));
  });

  it('Should create a rectangle', async () => {
    const result = await rainbowSquare(400, 200);

    expect(result).toEqual(jasmine.any(String));
  });
});
