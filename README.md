# rainbow-square

Create a dataURL for a square with a rainbow gradient.

[![GitHub release](https://img.shields.io/github/release/bameyrick/rainbow-square.svg)](https://github.com/bameyrick/rainbow-square/releases)
[![Build Status](https://travis-ci.com/bameyrick/rainbow-square.svg?branch=main)](https://travis-ci.com/github/bameyrick/rainbow-square)
[![codecov](https://codecov.io/gh/bameyrick/rainbow-square/branch/main/graph/badge.svg)](https://codecov.io/gh/bameyrick/rainbow-square)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a3a3e32d932c4abd83b6f5f6d2efb990)](https://www.codacy.com/manual/bameyrick/rainbow-square)

![rainbow-square](data:image/png;base64,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)

- [rainbow-square](#rainbow-square)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Documentation](#documentation)
  - [Usage](#usage)

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save rainbow-square
```

### yarn

```bash
yarn add rainbow-square
```

## Documentation

This documentation is written in TypeScript, however this library works fine in vanilla JavaScript too.

## Usage

The async function will return a [dataURL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) which can be used in the `src` attribute of an `img` tag.

```typescript
import { rainbowSquare } from 'rainbow-square';

async function myFn(): Promise<void> {
  const image = document.createElement('img');

  img.src = await rainbowSquare(256);

  document.body.appendChild(img);
}

void myFn();
```

You can also provide a height if you want to generate an rainbow gradient that isn't a square, although this may end up with more of one colour depending on whether the generated image is wider/taller.
