import { SimpleImage } from 'simple-image';

export function rainbowSquare(width: number, height?: number): Promise<string> {
  if (width > 0) {
    if (height !== undefined && height <= 0) {
      throw new Error('Height must be greater than 0');
    }
  } else {
    throw new Error('Width must be greater than 0');
  }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return new Promise(async resolve => {
    const image = new SimpleImage(width, height !== undefined ? height : width);

    await image.ready;

    const pixels = image.pixels;

    for (const pixel of pixels) {
      pixel.red = 255 - pixel.x;
      pixel.green = 255 - pixel.y;
      pixel.blue = pixel.x;
    }

    resolve(image.toDataURL());
  });
}
